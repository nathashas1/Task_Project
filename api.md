IndexPage
HTTP METHOD: 'GET'
URL: "/api/groups?limit=${limit}&offset=${offset}"
REQUEST PARAMETERS: Limit and Offset
RESPONSE FORMAT: json
[
  {
    "id": 1,
    "group": "Purchases",
    "total_tasks": "3",
    "completed_tasks": 1
  },

  {
    "id": 2,
    "group": "Build Airplane",
    "total_tasks": "5",
    "completed_tasks": 2
  }
]

Tasks Show Page
HTTP METHOD: 'GET'
URL: `/api/tasks?group_id=${groupId}`
REQUEST PARAMETERS: GroupId
RESPONSE FORMAT: json
[
  {
    "id": 1,
    "task_name": "Buy paint",
    "completed_at": null/true/false
    "dependencies": [3,4]
  },

  {
    "id": 1,
    "task_name": "Go to the bank",
    "completed_at": null/true/false
    "dependencies": []
  },
]


Completing/ Incompleting the task -> Task Page
HTTP METHOD: 'POST'
URL: `/api/tasks?task_id=${taskId}`,
REQUEST PARAMETERS: taskId
RESPONSE FORMAT: json(The completed/incompleted task is sent back and  gets updated in the front end)
{
  "id": 1,
  "task_name": "Buy paint",
  "completed_at": null/true/false
  "dependencies": [3,4]
}
