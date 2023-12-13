function disp_details(id, name, mail_id) {
    //An optional parameter can be marked optional by appending a question mark to its name
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
