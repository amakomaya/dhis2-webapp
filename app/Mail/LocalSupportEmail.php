<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LocalSupportEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $email;
     public $fname;
     public  $lname;
     public $phone; 

    public function __construct( $email, $fname, $lname, $phone)
    {
        $this->email = $email;
        $this->fname = $fname;
        $this->lname = $lname;
        $this->phone = $phone;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Local Support Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function build()
    {
        return $this->view('emails.localsupportcreate')
                    ->subject('Local Support Client Information')
                    ->with([
                        'email' =>$this->email,
                        'fname' => $this->fname,
                        'lname' => $this->lname,
                        'phone'=> $this->phone,
                    ]);
    }
    public function content(): Content
    {
        return new Content(
            view: 'emails.localsupportcreate',
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
