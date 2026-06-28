from pymongo import MongoClient
from config import Config

# Create MongoDB Client
client = MongoClient(Config.MONGO_URI)

# Select Database
db = client[Config.DATABASE_NAME]

# Select Collection
employee_collection = db[Config.COLLECTION_NAME]
user_collection = db["users"]