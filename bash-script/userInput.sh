#! /bin/bash

read -p "userName: " username
echo "userName: $username"
echo
echo "Enter name: "
read name1 name2 name3
echo "Entered name1 and name2: $name1, $name2"
echo "Entered name3: $name3"


# default variable
echo "default varibale: "
read
echo "Name: $REPLY"
