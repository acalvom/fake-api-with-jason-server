# Create a fake API REST with random data

### 1. Clone the project from the [repository](https://github.com/acalvom/fake-api-with-jason-server.git):
#### `git clone https://github.com/acalvom/fake-api-with-jason-server.git`

### 2. Install node packages:
#### `npm install`

### 3. Define API structure:
This app creates 100 random users with:
- id
- email
- password
- role (user or admin)

You can define the API structure by modifying the file `generate_db.js` .
Take a look to the file `db.json` to check the generated structure.

### 4. Generate the `db.json` file:
#### `node generate_db.js > db.json`

### 5. Start the JSON Server:
#### `npm start`

- Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
- The page will reload if you make edits.\
- You will also see any lint errors in the console.
