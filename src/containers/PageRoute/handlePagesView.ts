import { orginaztionPages } from "./organizationPages";
import { TeacherPages } from "./teacherPages";

export const handlePagesView = (role: string) => {
    switch (role) {
        case "organizationContent.": return orginaztionPages; break;
        case "teacherContent.": return TeacherPages; break;


        default:
            break;
    }
}

export const handleFirstPageAfterLogin = (role: any) => {

    switch (role) {
        case "organizationContent.": return "/page/home"; break;
        case "teacherContent.": return "/page/teacherDashboard"; break;


        default:
            break;
    }

}