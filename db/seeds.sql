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
    ('John', 'Doe', 8, NULL),
    ('Sarah', 'White', 7, 1),
    ('Jane', 'Smith', 4, NULL),
    ('Robert', 'Johnson', 3, 4),
    ('Emily', 'Clark', 3, 4),
    ('David', 'Williams', 3, 4),
    ('Linda', 'Brown', 3, 4),
    ('Emily', 'Jones', 6, NULL),
    ('Michael', 'Davis', 5, 8),
    ('Laura', 'Garcia', 5, 8),
    ('James', 'Wilson', 10, NULL),
    ('Patricia', 'Martinez', 9, 10),
    ('Brian', 'Taylor', 9, 10),
    ('Kevin', 'Anderson', 8, 10),
    ('Christopher', 'Thomas', 11, NULL),
    ('Steven', 'Moore', 12, 11),
    ('Sophia', 'Jackson', 11, 11),
    ('Paul', 'Thompson', 1, NULL),
    ('Nancy', 'Harris', 2, 1),
    ('Ashley', 'Clark', 1, 1);