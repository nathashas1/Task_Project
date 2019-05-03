CREATE TABLE Groups (
  GroupId int NOT NULL,
  GroupName varchar(255) NOT NULL
)

CREATE TABLE Tasks (
  TaskId int NOT NULL,
  taskName varchar(255) NOT NULL,
  GroupId int,
  CompletedAt DEFAULT 'null',
  PRIMARY KEY (TaskId),
  FOREIGN KEY (GroupId) REFERENCES Groups(GroupId)
)

CREATE INDEX group_id
ON Tasks (GroupId);

CREATE TABLE Dependencies (
  DependencyId int NOT NULL,
  TaskId int,
  DependencyIds int
  PRIMARY KEY (DependencyId),
  FOREIGN KEY (TaskId) REFERENCES Tasks(TaskId),
)


CREATE INDEX task_id
ON Dependencies (TaskId);
