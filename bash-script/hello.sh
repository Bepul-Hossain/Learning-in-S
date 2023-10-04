#!/bin/bash

# Define your Node.js project directory
project_directory="/home/bepul/Learning-in-S/auth-crud-assign"

# Open the Node.js project in VSCode
code "$project_directory"
echo $project_directory
# Wait for VSCode to open the project (adjust the sleep duration as needed)
sleep 5

# Open the integrated terminal in VSCode
code --goto "${project_directory}" --new-terminal

# Wait for the terminal to open (adjust the sleep duration as needed)
sleep 5

# Send the "npm run start" command to the terminal
xdotool type "npm run start"

# Send the Enter key to execute the command
xdotool key Return

# Optionally, you can add more commands or automation here if needed

# Exit the script
exit 0