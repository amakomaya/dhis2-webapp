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

    public $email;
    public $fname;
    public $lname;
    public $phone;
    public $letter;
    public $hfdetails;

    public function __construct($email, $fname, $lname, $phone, $letter = null, $hfdetails = null)
    {
        $this->email = $email;
        $this->fname = $fname;
        $this->lname = $lname;
        $this->phone = $phone;
        $this->letter = $letter;
        $this->hfdetails = $hfdetails;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Local Support Email',
        );
    }

    public function build()
    {
        $email = $this->view('emails.localsupportcreate')
                      ->subject('Local Support Client Information')
                      ->with([
                          'email' => $this->email,
                          'fname' => $this->fname,
                          'lname' => $this->lname,
                          'phone' => $this->phone,
                      ]);

        if ($this->letter) {
            $email->attach(storage_path('app/public/uploads/' . $this->letter));
        }

        if ($this->hfdetails) {
            $email->attach(storage_path('app/public/uploads/' . $this->hfdetails));
        }

        return $email;
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.localsupportcreate',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
