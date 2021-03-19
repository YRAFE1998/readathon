import { orginaztionPages } from "./organizationPages";
import { studentsPages } from "./studentsPages";
import { TeacherPages } from "./teacherPages";

export const handlePagesView = (role: string) => {
    switch (role) {
        case "organizationContent.": return orginaztionPages; break;
        case "teacherContent.": return TeacherPages; break;
        case "studentContent.": return studentsPages; break;
        default:
            break;
    }
}

export const handleFirstPageAfterLogin = (role: any) => {

    switch (role) {
        case "organizationContent.": return "/page/home"; break;
        case "teacherContent.": return "/page/teacherDashboard"; break;
        case "studentContent.": return "/page/students"; break;



        default:
            break;
    }

}
