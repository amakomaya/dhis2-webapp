<x-mail::layout>
{{-- Header --}}
{{--
<x-slot:header>
<x-mail::header :url="https://dhis2mis.org/">
<h1>Dhis2</h1>
</x-mail::header>
</x-slot:header>--}}

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
<x-slot:subcopy>
<x-mail::subcopy>
{{ $subcopy }}
</x-mail::subcopy>
</x-slot:subcopy>
@endisset

{{-- Footer --}}
<x-slot:footer>
<x-mail::footer>
© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
</x-mail::footer>
</x-slot:footer>
</x-mail::layout>
