<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewsletterMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $top_banner;
    public $date;
    public $title;
    public $summary;
    public $description;
    public $image;
    public $image_link;
    public $is_upcoming_events_date;
    public $is_upcoming_events_time;
    public $is_upcoming_events_location;
    public $registration_link;
    public $meeting_link;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->subject = $data->subject;
        $this->top_banner = $data->top_banner;
        $this->date = $data->date;
        $this->title = $data->title;
        $this->summary = $data->summary;
        $this->description = $data->description;
        $this->image = $data->image;
        $this->image_link = $data->image_link;
        $this->is_upcoming_events_date = $data->is_upcoming_events_date;
        $this->is_upcoming_events_time = $data->is_upcoming_events_time;
        $this->is_upcoming_events_location = $data->is_upcoming_events_location;
        $this->registration_link = $data->registration_link;
        $this->meeting_link = $data->meeting_link;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject($this->subject)
                    ->markdown('emails.newsletter')
                    ->with([
                        'top_banner'=> $this->top_banner,
                        'title' => $this->title,
                        'date' => $this->date,
                        'summary' => $this->summary,
                        'image' => $this->image,
                        'image_link' => $this->image_link,
                        'description' => $this->description,
                        'is_upcoming_events_date' => $this->is_upcoming_events_date,
                        'is_upcoming_events_time' => $this->is_upcoming_events_time,
                        'is_upcoming_events_location' => $this->is_upcoming_events_location,
                        'registration_link' => $this->registration_link,
                        'meeting_link' => $this->meeting_link
                    ]);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.newsletter',
        );
    }

    /**
     * Get the attachments for the message.
     */
    public function attachments(): array
    {
        return [];
    }
}
