import pyodbc

server = 'esg-sqldb-server.database.windows.net'
database = 'esg-db'
username = 'chaky'
password = 'Ch@ky123'
driver = '{ODBC Driver 17 for SQL Server}'

# Establish a connection
connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'
conn = pyodbc.connect(connection_string)

# Create a cursor
cursor = conn.cursor()

# Execute a query
cursor.execute('SELECT ProductID, Name FROM SalesLT.Product')

# Fetch and print the results
rows = cursor.fetchall()
for row in rows[11:20]:
    print(row)

# Close the connection
conn.close()