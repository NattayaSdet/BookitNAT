package com.bookit.utilities;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class BookitUtils {

    public static String generateToken(String email, String password) {

        Response response = given()
                .accept(ContentType.JSON)
                .queryParam("email", email)
                .and()
                .queryParam("password", password)
                .when().get(Environment.BASE_URL + "/sign");

        String token = "Bearer " + response.path("accessToken");

        return token;
    }

    public static String getTokenByRole(String role) {
        String email = "";
        String password = "";

        switch (role) {
            case "teacher":
                email = Environment.TEACHER_EMAIL;
                password = Environment.TEACHER_PASSWORD;
                break;

            case "student-member":
                email = Environment.MEMBER_EMAIL;
                password = Environment.MEMBER_PASSWORD;
                break;
            case "student-leader":
                email = Environment.MEMBER_PASSWORD;
                break;
            default:

                throw new RuntimeException("Invalid Role Entry :\n>> " + role + " <<");

        }
        Map<String, String> credentials = new HashMap<>();
        credentials.put("email", email);
        credentials.put("password", password);

        String path = given()
                .queryParams(credentials)
                .when().get(Environment.BASE_URL + "/sign").path("accessToken");
        return "Bearer " + path;

    }
}
