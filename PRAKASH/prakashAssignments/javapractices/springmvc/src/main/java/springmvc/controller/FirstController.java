package springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FirstController {

	@RequestMapping("/home")
	public ModelAndView home() {
		
		ModelAndView mv=new ModelAndView();
		mv.setViewName("home");
		
		
		return mv;
	}
	
	
}
