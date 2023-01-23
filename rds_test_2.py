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

# # create table employee
# cursor.execute("""CREATE TABLE employee(
# id integer PRIMARY KEY,
# dob date,
# first text,
# middle text,
# last text,
# is_manager integer
# )""")

# # create table project
# cursor.execute("""CREATE TABLE project(
# id SERIAL PRIMARY KEY,
# code text,
# description text
# )""")

# # create table client
# cursor.execute("""CREATE TABLE client(
# id SERIAL PRIMARY KEY,
# client_id integer,
# name text,
# address text,
# address_2 text,
# city text,
# state text,
# country text
# )""")

# # create employee worked hours
# cursor.execute("""CREATE TABLE hours_worked(
# id SERIAL PRIMARY KEY,
# employee_id integer,
# project_id serial,
# time_started timestamp,
# time_ended timestamp
# )""")

# insert into table
# cursor.execute("""INSERT INTO employee(id, dob, first, middle, last, is_manager)
# VALUES(1778920, '1970-01-01', 'Jane', 'A', 'Smith', 0)""")
# cursor.execute("""INSERT INTO project(code, description)
# VALUES('STN056', 'Project with Stinson Residences')""")
# cursor.execute("""INSERT INTO client(client_id, name, address, address_2, city, state, country)
# VALUES(5867445, 'Stinson Residences', '3404 Tillerson Rd', 'Suite 2A', 'Eagle Bluff', 'SD', 'US')""")
# cursor.execute("""INSERT INTO hours_worked(employee_id, project_id, time_started, time_ended)
# VALUES(1778920, 3, '2003-02-01 09:00:00', '2003-02-01 13:00:00')""")
# cursor.execute("""INSERT INTO hours_worked(employee_id, project_id, time_started, time_ended)
# VALUES(1778920, 3, '2003-02-01 13:30:00', '2003-02-01 17:30:00')""")
connection.commit()

# SELECT table_name
# FROM information_schema.tables
# WHERE table_schema = 'public'
# ORDER BY table_name;

# read from table
# cursor.execute("select * from project")
cursor.execute("""
SELECT * from post;
""")
results = cursor.fetchall()
for r in results:
    print(r)