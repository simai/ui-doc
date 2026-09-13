#!/usr/bin/env python3
"""Validate the produced AI manifests and every advertised text representation."""
import hashlib,json
from pathlib import Path
from urllib.parse import unquote,urlsplit
from jsonschema import Draft202012Validator
root=Path(__file__).resolve().parent.parent
build=root/'build_production'
schema=json.loads((root/'contracts/ai-first/manifest.schema.json').read_text())
validator=Draft202012Validator(schema)
catalog_validator=Draft202012Validator(json.loads((root/'contracts/ai-first/catalog.schema.json').read_text()))
paths=[build/'ai.json',*sorted((build/'ai/catalogs').glob('*.json')),*sorted((build/'ru').rglob('ai.json'))]
main=json.loads((build/'ai.json').read_text())
for link in main['catalogs']:
    target=(build/link['href']).resolve()
    assert hashlib.sha256(target.read_bytes()).hexdigest()==link['sha256']
    assert json.loads(target.read_text())['revision']==main['revision']
count=0
for path in paths:
    data=json.loads(path.read_text());(catalog_validator if data['document']=='catalog' else validator).validate(data)
    for item in data.get('items',[]):
        for rep in item['representations']:
            url=urlsplit(rep['href'])
            assert not url.scheme and not url.netloc,'Only local generated representations are allowed'
            target=(path.parent/unquote(url.path)).resolve()
            assert target.is_relative_to(build.resolve()),'Representation escapes the build'
            assert hashlib.sha256(target.read_bytes()).hexdigest()==rep['sha256'],str(target)
            count+=1
print(json.dumps({'status':'pass','manifests':len(paths),'representations':count}))
