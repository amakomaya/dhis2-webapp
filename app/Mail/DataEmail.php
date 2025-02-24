<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DataEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    public $email;
    public $organizationType;

    public function __construct($email, $organizationType)
    {
        $this->email = $email;
        $this->organizationType = $organizationType;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Data Email',
        );
    }

    /**
     * Get the message content definition.
     */
     public function build()
    {
        return $this->subject('Data Email')
                    ->view('emails.data')
                    ->with(['email' => $this->email, 'organizationType' => $this->organizationType]);    
            }

    
    public function content(): Content
    {
        return new Content(
            view: 'emails.data',
        );
    }

    

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
