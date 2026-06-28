from flask import Blueprint, jsonify, request
from database.db import employee_collection
from bson import ObjectId

employee_bp = Blueprint("employees", __name__)

# -------------------------------
# GET ALL EMPLOYEES
# -------------------------------
@employee_bp.route("/employees", methods=["GET"])
def get_employees():

    employees = []

    for employee in employee_collection.find():
        employee["_id"] = str(employee["_id"])
        employees.append(employee)

    return jsonify(employees)


# -------------------------------
# ADD EMPLOYEE
# -------------------------------
@employee_bp.route("/employees", methods=["POST"])
def add_employee():

    data = request.json

    # Basic Validation
    if not data.get("name"):
        return jsonify({"message": "Employee Name is Required"}), 400

    if not data.get("department"):
        return jsonify({"message": "Department is Required"}), 400

    if not data.get("role"):
        return jsonify({"message": "Role is Required"}), 400

    if not data.get("salary"):
        return jsonify({"message": "Salary is Required"}), 400

    if not data.get("joinDate"):
        return jsonify({"message": "Join Date is Required"}), 400

    employee = {
        "name": data["name"],
        "department": data["department"],
        "role": data["role"],
        "salary": data["salary"],
        "joinDate": data["joinDate"]
    }

    result = employee_collection.insert_one(employee)
    

    return jsonify({
        "message": "Employee Added Successfully",
        "id": str(result.inserted_id)
    }), 201

# -------------------------------
# UPDATE EMPLOYEE
# -------------------------------
@employee_bp.route("/employees/<id>", methods=["PUT"])
def update_employee(id):

    data = request.json

    updated_employee = {
    "name": data.get("name"),
    "department": data.get("department"),
    "role": data.get("role"),
    "salary": data.get("salary"),
    "joinDate": data.get("joinDate")
}

    result = employee_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": updated_employee}
    )

    if result.modified_count == 1:
        return jsonify({
            "message": "Employee Updated Successfully"
        })

    return jsonify({
        "message": "Employee Not Found"
    }), 404

# -------------------------------
# DELETE EMPLOYEE
# -------------------------------
@employee_bp.route("/employees/<id>", methods=["DELETE"])
def delete_employee(id):

    result = employee_collection.delete_one(
        {"_id": ObjectId(id)}
    )

    if result.deleted_count == 1:

        return jsonify({
            "message":"Employee Deleted Successfully"
        })

    return jsonify({
        "message":"Employee Not Found"
    }),404