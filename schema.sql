CREATE TABLE Groups (
  GroupId int NOT NULL,
  GroupName varchar(255) NOT NULL
  PRIMARY KEY (GroupId),
)

CREATE TABLE Tasks (
  TaskId int NOT NULL,
  taskName varchar(255) NOT NULL,
  GroupId int,
  CompletedAt varchar(255) DEFAULT 'null',
  PRIMARY KEY (TaskId),
  FOREIGN KEY (GroupId) REFERENCES Groups(GroupId)
)

CREATE INDEX group_id
ON Tasks (GroupId);

CREATE TABLE Dependencies (
  DependencyId int NOT NULL,
  TaskId int,
  Dependent int,
  PRIMARY KEY (DependencyId),
  FOREIGN KEY (TaskId) REFERENCES Tasks(TaskId),
)


CREATE INDEX task_id
ON Dependencies (TaskId);
