package business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import dao.EmployeeDao;
import dao.EmployeeDaoImp;
import dto.Employee;

public class EmployeeBusinessImp implements EmployeeBusiness {

	@Autowired
	EmployeeDao employeeDao;
	
	
//	
//	public EmployeeDao getEmployeeDao() {
//		return employeeDao;
//	}
//
//
//
//	public void setEmployeeDao(EmployeeDao employeeDao) {
//		this.employeeDao = employeeDao;
//	}



	public void printEmployeeHikes() {
		
		List<Employee>	employeedetails =employeeDao.findAllEmployee();
//System.out.println(employeedetails);
if(employeedetails!=null) {
	for(Employee e:employeedetails) {
		
		if(e.getExp()>15) {
			System.out.println("employee with id"+e.getId()+"and "+e.getName()+"with experience "+e.getExp()+"got 30% hike");
		}else if(e.getExp()>=10) {
			System.out.println("employee with id"+e.getId()+"and "+e.getName()+"with experience "+e.getExp()+"got 20% hike");
		}else if(e.getExp()>=5) {
			System.out.println("employee with id"+e.getId()+"and "+e.getName()+"with experience "+e.getExp()+"got 15% hike");

		}else {
			System.out.println("employee with id"+e.getId()+"and "+e.getName()+"with experience "+e.getExp()+"got 10% hike");

		}
		
		
	}
}







	}

}
