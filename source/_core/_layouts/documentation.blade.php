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
@endsection
