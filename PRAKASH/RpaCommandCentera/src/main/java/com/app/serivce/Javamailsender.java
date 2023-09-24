package com.app.serivce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.internet.MimeMessage;


@Service
public class Javamailsender {
@Autowired
private JavaMailSender javaMailSender;

public void sendMail(String to,String subject,String body) {
	SimpleMailMessage message=new SimpleMailMessage();
	message.setTo(to);
	message.setSubject(subject);
	message.setText(body);
	javaMailSender.send(message);
	
}

public void sendEmailAttatchment(String to, String subject, String body, MultipartFile file)
        throws Exception {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);


    helper.setTo(to);
    helper.setSubject(subject);
    helper.setText(body, true);
    helper.addAttachment(file.getOriginalFilename(), file);
    try {
    	javaMailSender.send(message);
        System.out.println("Mail sent");
    } catch (Exception e) {
        System.out.println(e);
    }
}


}
