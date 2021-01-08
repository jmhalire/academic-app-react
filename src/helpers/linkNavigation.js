

export const getNavigateAdmin = () => {
    let link = [
        { classElement: "btn btn-success mx-1", url: "./semester", nameLink: "semesters" },
        { classElement: "btn btn-success mx-1", url: "./career", nameLink: "careers" },
        { classElement: "btn btn-success mx-1", url: "./course", nameLink: "courses" },
        { classElement: "btn btn-success mx-1", url: "./personal", nameLink: "personal" },
        { classElement: "btn btn-success mx-1", url: "./asignation-teacher", nameLink: "Asignation teacher" },
    ];
    return link;
};

export const getNavigateTeacher = () => {
    let link = [
        { classElement: "btn btn-cyan mx-1", url: "./chat-with-student", nameLink: "Chat" },
        { classElement: "btn btn-cyan mx-1", url: "./student-note", nameLink: "Notes" },
        { classElement: "btn btn-cyan mx-1", url: "./student-for-course", nameLink: "Courses" },
        { classElement: "btn btn-cyan mx-1", url: "./note-entry", nameLink: "Notes entry" },
    ];
    return link;
};

export const getNavigateStudent = (value) => {
    let link = [
        { classElement: "btn btn-brown mx-1", url: "./notes", nameLink: "Notes" },
        { classElement: "btn btn-brown mx-1", url: "./courses", nameLink: "Courses" }
    ]
    if(value){
        link.push({classElement: "btn btn-cyan mx-1",url: "./register-semester",nameLink: "Register semester"});
    }
    return link;
}