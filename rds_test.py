import psycopg2
import pandas as pd
from rds_config import host, port, user, password, database

connection = psycopg2.connect(
    host = host,
    port = port,
    user = user,
    password = password,
    database = database
)
cursor=connection.cursor()

# #creating table passengers
# cursor.execute("""CREATE TABLE passengers(
# id SERIAL PRIMARY KEY,
# name text,
# sex text,
# age float,
# sibsp integer,
# parch integer)""")

# cursor.execute("""CREATE TABLE survival(
# id SERIAL PRIMARY KEY,
# survived integer)""")

# cursor.execute("""CREATE TABLE tripInfo(
# id SERIAL PRIMARY KEY,
# pclass integer,
# ticket text,
# fare float,
# cabin text,
# embarked text)""")

# connection.commit()

# # insert into table passengers
# cursor.execute("""INSERT INTO passengers(name, sex, age, sibsp, parch)
# VALUES('George Costanza', 'M', 46, 0, 0)""")
# connection.commit()

# read from table passengers
cursor.execute("select * from passengers")
results = cursor.fetchall()
for r in results:
    print(r)