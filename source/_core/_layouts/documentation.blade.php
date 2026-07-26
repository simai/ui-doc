@extends('_core._layouts.master')

@push('meta')
    <style>
        /*
         * Fenced examples are useful content, not a loading placeholder.
         * Syntax highlighting may enhance them, but a failed optional chunk
         * must never make the source code invisible.
         */
        .main--content pre code:not(.hljs) {
            opacity: 1;
        }

        .main--content {
            min-width: 0;
            max-width: 100%;
        }

        .sf-doc-color-value {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            white-space: nowrap;
        }

        .sf-doc-color-chip {
            display: inline-block;
            flex: 0 0 auto;
            width: 1.25rem;
            height: 1.25rem;
            border: 1px solid var(--sf-outline-variant);
            border-radius: 0.3rem;
            background: var(--sf-doc-color);
            box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.12);
        }

        .sf-doc-color-chip--transparent {
            background-color: var(--sf-surface-0);
            background-image:
                linear-gradient(45deg, var(--sf-outline-variant) 25%, transparent 25%),
                linear-gradient(-45deg, var(--sf-outline-variant) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, var(--sf-outline-variant) 75%),
                linear-gradient(-45deg, transparent 75%, var(--sf-outline-variant) 75%);
            background-position: 0 0, 0 0.3rem, 0.3rem -0.3rem, -0.3rem 0;
            background-size: 0.6rem 0.6rem;
        }

        .main--content table.sf-doc-color-table {
            display: table;
            width: 100%;
            table-layout: fixed;
        }

        .main--content table.sf-doc-color-table thead {
            display: table-header-group;
        }

        .main--content table.sf-doc-color-table tbody {
            display: table-row-group;
        }

        .main--content table.sf-doc-color-table tbody tr {
            display: table-row;
        }

        .main--content table.sf-doc-color-table th,
        .main--content table.sf-doc-color-table td {
            padding-left: .375rem;
            padding-right: .375rem;
            white-space: nowrap;
        }

        .main--content table.sf-doc-color-table .sf-doc-color-value {
            gap: .2rem;
        }

        .main--content table.sf-doc-color-table .sf-doc-color-chip {
            flex: 0 0 1rem;
            width: 1rem;
            height: 1rem;
        }

        .main--content table.sf-doc-color-table code {
            padding: .125rem .2rem;
            font-size: .75em;
        }

        @media (max-width: 767px) {
            html,
            body {
                max-width: 100%;
                overflow-x: clip;
            }

            .main--content .sf-doc-table-scroll {
                max-width: 100%;
                overflow-x: auto;
                overscroll-behavior-inline: contain;
            }

            .main--content .sf-doc-table-scroll > table {
                display: table;
                width: 100%;
                min-width: 36rem;
                table-layout: auto;
            }
        }

        .sf-doc-color-role-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
            gap: 0.75rem;
            margin: 1rem 0 1.5rem;
        }

        .sf-doc-color-role {
            display: flex;
            min-height: 7rem;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem;
            color: var(--sf-doc-role-color);
            background: var(--sf-doc-role-background);
            border: 1px solid var(--sf-outline-variant);
            border-radius: var(--sf-radius-1);
        }

        .sf-doc-color-role strong {
            font-size: 1.05rem;
        }

        .main--content .sf-doc-color-role code {
            padding: 0;
            color: var(--sf-doc-role-color);
            background: transparent;
            opacity: 0.82;
        }
    </style>
@endpush

@section('body')
    <section>
        @include('_core._components._nav.breadcrumbs')

        <div class="flex flex-col lg:flex-row">
            <div class="main--content" v-pre>
                @yield('content')
            </div>
        </div>
    </section>
    @include('_core._components._nav.bottom-nav')

    <script>
        (() => {
            const wrapDocumentationTables = () => {
                const logo = document.querySelector('a.logo.sf-logo');
                logo?.setAttribute('aria-label', document.title.split('|')[0].trim());

                const searchClose = document.getElementById('search_close');
                searchClose?.setAttribute(
                    'aria-label',
                    document.documentElement.lang === 'ru' ? 'Закрыть поиск' : 'Close search'
                );

                document.querySelectorAll('.main--content table').forEach((table) => {
                    if (table.parentElement?.classList.contains('sf-doc-table-scroll')) {
                        return;
                    }

                    const wrapper = document.createElement('div');
                    wrapper.className = 'sf-doc-table-scroll';
                    table.before(wrapper);
                    wrapper.append(table);
                });
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', wrapDocumentationTables, { once: true });
            } else {
                wrapDocumentationTables();
            }
        })();
    </script>
@endsection
