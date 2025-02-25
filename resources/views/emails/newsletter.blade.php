@component('mail::message')

{{-- Clickable Top Banner --}}
<a href="https://dhis2mis.org/" target="_blank">
    <img src="{{ $top_banner }}" alt="Top Banner" style="width: 100%; height:100px; display: block;">
</a>

<span style="color:#093371; font-weight: bold;"> Date: <span style="color: #000">{{ $date }}</span></span>

{{-- Title --}}
<span style="color: #093371; font-weight: bold; font-size:20px;"> {{ $title }} </span>



{{-- Clickable Image --}}
@if($image)
<a href="{{ $image_link }}" target="_blank">
    <img src="{{ $image }}" alt="Newsletter Image" style="width: 100%; display: block; border-radius: 8px;">
</a>
@endif

{{-- Summary --}}
<span style="color:#093371; font-weight: bold; margin-top:'5px';">Summary:</span>
<span style="color: #000">{{ $summary }}</span>

{{-- Description --}}
<!-- {!! $description !!} -->
<span style="color: #000">{!! $description !!}
</span>


@if($is_upcoming_events_date)
<span style="color: #093371; font-weight: bold; "> Upcoming Events: </span> 
<br/>
<strong style="color: #093371;">Date:</strong ><span style="color: #000"> {{ $is_upcoming_events_date }}</span><br/>
<strong style="color: #093371;">Time:</strong > <span style="color: #000"> {{ $is_upcoming_events_time }}</span><br/>
<strong style="color: #093371;">Location:</strong> <span style="color: #000"> {{ $is_upcoming_events_location }}</span>

@endif

@if($registration_link)
<a href="{{ $registration_link }}" style="display: inline-block; background-color: #008CCF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
 Register Here
</a>
@endif

@if($meeting_link)
<a href="{{ $meeting_link }}" style="display: inline-block; background-color: #008CCF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
Join Meeting
</a>
@endif

<hr>

{{-- Footer --}}
<table style="margin: 0 auto;">
    <tr>
        <td>
            <p><strong style="color: #093371; ">Connect with us:</strong></p>
            <p style="display: flex;  gap: 8px;">
                <a href='https://amakomaya.com/' target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png" width="24">
                </a> 
                <a href='https://www.facebook.com/dhis2mis' target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111393.png" width="24">
                </a> 
                <a href="https://www.instagram.com/amakomaya/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" width="24">
                </a> 
                <a href="https://twitter.com/amakomaya" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" width="24">
                </a> 
                <a href="https://www.youtube.com/@DHIS2MISNepal/videos" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="24">
                </a> 
            </p>
            <img src="{{ asset('logo.png') }}" alt="Amakomaya Logo" style="width: 100px; margin-top: 10px;">
            <p><strong style="color:#093371">DHIS2MIS | Amakomaya</strong><br><span style="color:#000">Kathmandu, Nepal</span></p> 
              <a href="https://dhis2mis.org/" style="display: inline-block; background-color: #008CCF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
                Explore DHIS2 Nepal
            </a>   
        </td>
    </tr>
</table>

@endcomponent
