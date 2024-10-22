INSERT INTO department (name)
VALUES 
    ('Human Resources'),
    ('Engineering'),
    ('Marketing'),
    ('Sales'),
    ('Finance'),
    ('Operations');

-- Insert values into the role table
INSERT INTO role (title, salary, department_id)
VALUES 
    ('HR Manager', 60000, 1),
    ('HR Specialist', 50000, 1),
    ('Software Engineer', 80000, 2),
    ('Senior Software Engineer', 95000, 2),
    ('Marketing Specialist', 55000, 3),
    ('Marketing Director', 75000, 3),
    ('Sales Associate', 50000, 4),
    ('Sales Manager', 70000, 4),
    ('Finance Analyst', 60000, 5),
    ('CFO', 120000, 5),
    ('Operations Coordinator', 55000, 6),
    ('Operations Manager', 75000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 1, NULL),
    ('Sarah', 'White', 2, 1),
    ('Jane', 'Smith', 3, NULL),
    ('Robert', 'Johnson', 4, 3),
    ('Emily', 'Clark', 3, 3),
    ('David', 'Williams', 4, 3),
    ('Linda', 'Brown', 3, 3),
    ('Emily', 'Jones', 5, NULL),
    ('Michael', 'Davis', 6, 5),
    ('Laura', 'Garcia', 5, 5),
    ('James', 'Wilson', 7, NULL),
    ('Patricia', 'Martinez', 8, 7),
    ('Brian', 'Taylor', 7, 7),
    ('Kevin', 'Anderson', 8, 7),
    ('Christopher', 'Thomas', 9, NULL),
    ('Steven', 'Moore', 10, 9),
    ('Sophia', 'Jackson', 9, 9),
    ('Paul', 'Thompson', 11, NULL),
    ('Nancy', 'Harris', 12, 11),
    ('Ashley', 'Clark', 11, 11);