import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

// layouts
import '../../ui/layouts/main/mainLayout'
import '../../ui/layouts/auth/authLayout'

// pages
import '../../ui/pages/lessons/lessons'
import '../../ui/pages/lessons/lessonsAttendance'
import '../../ui/pages/exams/exams'
import '../../ui/pages/exams/examResults'
import '../../ui/pages/lessons/lessonsMaterials'
import '../../ui/pages/users/userInformation'
import '../../ui/pages/auth/changePassword'
import '../../ui/pages/auth/login'
import '../../ui/pages/auth/forgotPassword'
import '../../ui/pages/auth/resetPassword'

// components
import '../../ui/components/sidebar/sidebar'


FlowRouter.route("/", {
  name: "App.lessons",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "lessons",
    });
  },
});


FlowRouter.route("/lessons-attendance", {
  name: "App.lessonsAttendance",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "lessonsAttendance",
    });
  },
});


FlowRouter.route("/exams", {
  name: "App.exams",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "exams",
    });
  },
});


FlowRouter.route("/exam-results", {
  name: "App.examResults",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "examResults",
    });
  },
});


FlowRouter.route("/lessons-materials", {
  name: "App.lessonsMaterials",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "lessonsMaterials",
    });
  },
});


FlowRouter.route("/user-informations", {
  name: "App.userInformations",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "userInformations",
    });
  },
});


FlowRouter.route("/change-password", {
  name: "App.changePassword",
  action() {
    BlazeLayout.render("mainLayout", {
      main: "changePassword",
    });
  },
});

FlowRouter.route("/login", {
  name: "App.login",
  action() {
    BlazeLayout.render("authLayout", {
      main: "login",
    });
  },
});


FlowRouter.route("/forgot-password", {
  name: "App.forgotPassword",
  action() {
    BlazeLayout.render("authLayout", {
      main: "forgotPassword",
    });
  },
});

FlowRouter.route("/reset-password", {
  name: "App.resetPassword",
  action() {
    BlazeLayout.render("authLayout", {
      main: "resetPassword",
    });
  },
});