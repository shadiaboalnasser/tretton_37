import { EmployeeService, IEmployee } from ".."

describe("EmployeeService" , () =>{
    let employeeService: EmployeeService 
        ,mockHttp: any;
    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj("mockHttp", ["get"])
        employeeService = new EmployeeService(mockHttp);
    })

    describe("replaceBrokenEmployeeImage" , () =>{
       
        it("should replace broken and not exist images url", () =>{
            let employees = [
                {name : "employee 1" , imagePortraitUrl : null},
                {name : "employee 2" , imagePortraitUrl : "https://i.1337co.de/profile/ahmed-bazzara"},
            ];
            employeeService.replaceBrokenEmployeeImage(<IEmployee[]>employees);
            expect(employees[0].imagePortraitUrl).toBe("assets/profile-photo.jpg");
            expect(employees[1].imagePortraitUrl).toBe("https://i.1337co.de/profile/ahmed-bazzara");
        })
    })

    describe("checkIfImageExists" , () =>{
       
        it("should return boolean if an image url works", (done) =>{
            employeeService.checkIfImageExists("https://www.backapp.com/media/1758/fake.png", (result: any) => {
                expect(result).toEqual(false);
                done();
            })
            employeeService.checkIfImageExists("https://i.1337co.de/profile/ahmed-bazzara", (result: any) => {
                expect(result).toEqual(true);
                done();
            })
            employeeService.checkIfImageExists(null, (result: any) => {
                expect(result).toEqual(false);
                done();
            })
        })
    })
})