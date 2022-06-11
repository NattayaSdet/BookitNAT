$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/student.feature");
formatter.feature({
  "name": "Create Student",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create student as a teacher and verify status code is 201",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I logged Bookit api using \"blyst6@si.edu\" and \"barbabaslyst\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I send POST request \"/api/students/student\" endpoint with following information",
  "rows": [
    {
      "cells": [
        "first-name",
        "harold"
      ]
    },
    {
      "cells": [
        "last-name",
        "finch"
      ]
    },
    {
      "cells": [
        "email",
        "harold534345@cydeo.com"
      ]
    },
    {
      "cells": [
        "password",
        "abc123"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "campus-location",
        "VA"
      ]
    },
    {
      "cells": [
        "batch-number",
        "8"
      ]
    },
    {
      "cells": [
        "team-name",
        "Nukes"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "status code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I delete previously added student",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test new properties",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I get environment information",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "verify information about logged user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I logged Bookit api using \"fscoughx@msu.edu\" and \"feodorascough\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "verify information about logged user from api and database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I logged Bookit api using \"fscoughx@msu.edu\" and \"feodorascough\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the information about current user from api and database should match",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "three point/layer (UI,API,DATABASE)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"fscoughx@msu.edu\" \"feodorascough\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I logged Bookit api using \"fscoughx@msu.edu\" and \"feodorascough\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "three point/layer (UI,API,DATABASE)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "And "
});
formatter.step({
  "name": "I logged Bookit api using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "fscoughx@msu.edu",
        "feodorascough"
      ]
    },
    {
      "cells": [
        "lfinnisz@yolasite.com",
        "lissiefinnis"
      ]
    }
  ]
});
formatter.scenario({
  "name": "three point/layer (UI,API,DATABASE)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"fscoughx@msu.edu\" \"feodorascough\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I logged Bookit api using \"fscoughx@msu.edu\" and \"feodorascough\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "three point/layer (UI,API,DATABASE)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"lfinnisz@yolasite.com\" \"lissiefinnis\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I logged Bookit api using \"lfinnisz@yolasite.com\" and \"lissiefinnis\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});