from flask import Flask
from flask_cors import CORS
from routes.employee_routes import employee_bp
from routes.auth_routes import auth_bp

app = Flask(__name__)
app.register_blueprint(auth_bp)

CORS(app)

app.register_blueprint(employee_bp)

@app.route("/")
def home():
    return {
        "message": "EmployeeHub Backend Running"
    }

if __name__ == "__main__":
    app.run(debug=True)