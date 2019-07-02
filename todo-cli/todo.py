import os
import fire 
import sqlite3
import datetime

DEFAULT_PATH = os.path.join(os.path.dirname(__file__), 'database.sqlite3')

def db_connect(db_path = DEFAULT_PATH): 
    con = sqlite3.connect(db_path)
    return con 

def add_table_todo(): 
    con = db_connect() 
    sql = '''
        CREATE TABLE IF NOT EXISTS todos ( 
            id INTEGER PRIMARY KEY, 
            todo_text TEXT NOT NULL, 
            due_date TEXT,
            project_id INTEGER,
            complete INTEGER DEFAULT 0 
            user_id INTEGER 
        )
    '''
    cur = con.cursor()
    cur.execute(sql)
    con.close()

def add_todo(text, due_date=datetime.datetime.now(), project_id=3): 
    con = db_connect()
    sql = ''' 
        INSERT INTO todos (todo_text, due_date, project_id)
        VALUES(?, ?, ?)
    '''
    cur = con.cursor()
    cur.execute(sql, (text, due_date, project_id))
    
    select_sql = ''' 
        SELECT * from todos;
    '''
    cur.execute(select_sql)
    results = cur.fetchall()
    for row in results: 
        print(row)
     
    con.commit()
    con.close()
    print('The todo was added')
    
def help(): 
    print('I am not helping you')

def complete(id): 
    con = db_connect()
    sql = '''
        UPDATE todos
        SET complete = 1
        WHERE id = (?)
    '''
    cur = con.cursor()
    cur.execute(sql, (id, ))
    con.commit()
    con.close()

def _list(project_id): 
    con = db_connect()
    sql = '''
        SELECT * FROM todos
        WHERE project_id = (?)
    '''
    cur = con.cursor()
    cur.execute(sql, (project_id, ))

    results = cur.fetchall()
    for row in results: 
        print(row)

    con.commit()
    con.close()

def add_project(name): 
    con = db_connect()
    sql = '''
        CREATE TABLE IF NOT EXISTS project ( 
            id INTEGER PRIMARY KEY, 
            project_name STRING NOT NULL
        )
    '''
    cur = con.cursor()
    cur.execute(sql)

    create_project_sql = '''
        INSERT INTO project (project_name)
        VALUES (?)
    '''
    cur.execute(create_project_sql, (name, ))

    con.commit()
    con.close()
    print(f"The Project {name} was added")


def add_user(name, email): 
    con = db_connect()
    cur = con.cursor()

    sql = '''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL            
    )
    '''
    cur.execute(sql)

    #Print out the 
    print_sql = '''
        INSERT INTO users(name, email)
        VALUES (? , ?)
    '''
    cur.execute(print_sql, (name, email))
    results = cur.fetchall()
    for row in results: 
        print(row)

    con.commit()
    con.close()


def start_todos(): 
    add_table_todo()

if __name__ == '__main__':
  fire.Fire({ 
      'start': start_todos,
      'add' : add_todo, 
      '--help': help,
      'list': _list,
      'complete': complete,
      'project': add_project,
      'add_user': add_user
  })
