package com.poc.rest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class pageControllers {
    @GetMapping("/homepage")
    public ModelAndView homepage() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("registration_form.html");
        return mv;
    }

    @GetMapping("/appointmentsPage")
    public ModelAndView appointments() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("appointments.html");
        return mv;
    }

    @GetMapping("/login")
    public ModelAndView login() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("login_page.jsp");
        return mv;
    }

}
