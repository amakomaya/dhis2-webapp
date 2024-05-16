<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ProfileEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    
     public $email;
     public $fname;
     public  $lname;
     public $phone; 
     public $purpose; 
    public function __construct($email, $fname, $lname, $phone,$purpose)
    {
        $this->email = $email;
        $this->fname = $fname;
        $this->lname = $lname;
        $this->phone = $phone;
        $this->purpose = $purpose;

    }
    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Profile Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function build()
    {
        return $this->view('emails.profile')
                    ->subject('New Profile Information')
                    ->with([
                        'email' =>$this->email,
                        'fname' => $this->fname,
                        'lname' => $this->lname,
                        'phone'=> $this->phone,
                        'purpose' => $this->purpose,
                    ]);
    }
    public function content(): Content
    {
        return new Content(
            view: 'emails.profile',
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
