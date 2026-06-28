from flask import Blueprint,request,jsonify
from database.db import user_collection

auth_bp=Blueprint("auth",__name__)

@auth_bp.route("/signup",methods=["POST"])

def signup():

    data=request.json

    if user_collection.find_one({"email":data["email"]}):

        return jsonify({

            "message":"Email already exists"

        }),400

    user={

        "name":data["name"],
        "email":data["email"],
        "password":data["password"]

    }

    user_collection.insert_one(user)

    return jsonify({

        "message":"Signup Successful"

    }),201

@auth_bp.route("/login",methods=["POST"])

def login():

    data=request.json

    user=user_collection.find_one({

        "email":data["email"],
        "password":data["password"]

    })

    if user:

        return jsonify({

            "message":"Login Successful",
            "user":{

                "name":user["name"],
                "email":user["email"]

            }

        })

    return jsonify({

        "message":"Invalid Email or Password"

    }),401