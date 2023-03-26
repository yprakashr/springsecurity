package com.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String ToEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("manishmachha@gmail.com");
        message.setTo(ToEmail);
        message.setSubject(subject);
        message.setText(body);

        try {
            mailSender.send(message);
            System.out.println("Mail sent");
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void sendEmailAttatchment(String ToEmail, String subject, String body, MultipartFile file)
            throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setFrom("manishmachha@gmail.com");
        helper.setTo(ToEmail);
        helper.setSubject(subject);
        helper.setText(body, true);
        helper.addAttachment(file.getOriginalFilename(), file);
        try {
            mailSender.send(message);
            System.out.println("Mail sent");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
