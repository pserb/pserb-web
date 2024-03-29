export default function handler(req, res) {
    res.status(200).json(
        {
            // REGULAR
            "bell": {
                "scheduleType": "regular",
                "scheduleName": "Regular Schedule",
                "schedule": [
                  {
                    "name": "Before School",
                    "startTime": "0:00",
                    "duration": 420
                  },
                  {
                    "name": "Before Period 1",
                    "startTime": "7:00",
                    "duration": 60
                  },
                  {
                    "name": "Period 1",
                    "startTime": "8:00",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 2",
                    "startTime": "8:41",
                    "duration": 4
                  },
                  {
                    "name": "Period 2",
                    "startTime": "8:45",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 3",
                    "startTime": "9:26",
                    "duration": 5
                  },
                  {
                    "name": "Period 3",
                    "startTime": "9:31",
                    "duration": 44
                  },
                  {
                    "name": "Before Period 4",
                    "startTime": "10:15",
                    "duration": 5
                  },
                  {
                    "name": "Period 4",
                    "startTime": "10:20",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 5",
                    "startTime": "11:01",
                    "duration": 5
                  },
                  {
                    "name": "Period 5",
                    "startTime": "11:06",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 6",
                    "startTime": "11:47",
                    "duration": 5
                  },
                  {
                    "name": "Period 6",
                    "startTime": "11:52",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 7",
                    "startTime": "12:33",
                    "duration": 5
                  },
                  {
                    "name": "Period 7",
                    "startTime": "12:38",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 8",
                    "startTime": "13:19",
                    "duration": 5
                  },
                  {
                    "name": "Period 8",
                    "startTime": "13:24",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 9",
                    "startTime": "14:05",
                    "duration": 4
                  },
                  {
                    "name": "Period 9",
                    "startTime": "14:09",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 10",
                    "startTime": "14:50",
                    "duration": 4
                  },
                  {
                    "name": "Period 10",
                    "startTime": "14:54",
                    "duration": 41
                  },
                  {
                    "name": "After School",
                    "startTime": "15:35",
                    "duration": 504
                  }
                ]
            },
              
            // CONFERENCE
            "bell": {
                "scheduleType": "conference",
                "scheduleName": "Conference Schedule",
                "schedule": [
                  {
                    "name": "Before Period 1",
                    "startTime": "7:00",
                    "duration": 60
                  },
                  {
                    "name": "Period 1",
                    "startTime": "8:00",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 2",
                    "startTime": "8:37",
                    "duration": 4
                  },
                  {
                    "name": "Period 2",
                    "startTime": "8:41",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 3",
                    "startTime": "9:18",
                    "duration": 4
                  },
                  {
                    "name": "Period 3",
                    "startTime": "9:22",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 4",
                    "startTime": "9:59",
                    "duration": 4
                  },
                  {
                    "name": "Period 4",
                    "startTime": "10:03",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 5",
                    "startTime": "10:40",
                    "duration": 4
                  },
                  {
                    "name": "Period 5",
                    "startTime": "10:44",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 6",
                    "startTime": "11:21",
                    "duration": 4
                  },
                  {
                    "name": "Period 6",
                    "startTime": "11:25",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 7",
                    "startTime": "12:02",
                    "duration": 4
                  },
                  {
                    "name": "Period 7",
                    "startTime": "12:06",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 8",
                    "startTime": "12:43",
                    "duration": 4
                  },
                  {
                    "name": "Period 8",
                    "startTime": "12:47",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 9",
                    "startTime": "13:24",
                    "duration": 4
                  },
                  {
                    "name": "Period 9",
                    "startTime": "13:28",
                    "duration": 37
                  },
                  {
                    "name": "Before Period 10",
                    "startTime": "14:05",
                    "duration": 4
                  },
                  {
                    "name": "Period 10",
                    "startTime": "14:09",
                    "duration": 37
                  },
                  {
                    "name": "Before Meeting",
                    "startTime": "14:46",
                    "duration": 4
                  },
                  {
                    "name": "Meeting",
                    "startTime": "14:50",
                    "duration": 40
                  }
                ]
            },

            // HOMEROOM
            "bell": {
                "scheduleType": "homeroom",
                "scheduleName": "Homeroom Schedule",
                "schedule": [
                  {
                    "name": "Before Period 1",
                    "startTime": "7:00",
                    "duration": 60
                  },
                  {
                    "name": "Period 1",
                    "startTime": "8:00",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 2",
                    "startTime": "8:40",
                    "duration": 5
                  },
                  {
                    "name": "Period 2",
                    "startTime": "8:45",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 3",
                    "startTime": "9:25",
                    "duration": 4
                  },
                  {
                    "name": "Period 3",
                    "startTime": "9:29",
                    "duration": 40
                  },
                  {
                      "name": "Before Homeroom",
                      "startTime": "10:09",
                      "duration": 4
                  },
                  {
                      "name": "Homeroom",
                      "startTime": "10:13",
                      "duration": 12
                  },
                  {
                    "name": "Before Period 4",
                    "startTime": "10:25",
                    "duration": 5
                  },
                  {
                    "name": "Period 4",
                    "startTime": "10:30",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 5",
                    "startTime": "11:10",
                    "duration": 4
                  },
                  {
                    "name": "Period 5",
                    "startTime": "11:14",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 6",
                    "startTime": "11:54",
                    "duration": 4
                  },
                  {
                    "name": "Period 6",
                    "startTime": "11:58",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 7",
                    "startTime": "12:42",
                    "duration": 5
                  },
                  {
                    "name": "Period 7",
                    "startTime": "12:47",
                    "duration": 41
                  },
                  {
                    "name": "Before Period 8",
                    "startTime": "13:22",
                    "duration": 4
                  },
                  {
                    "name": "Period 8",
                    "startTime": "13:26",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 9",
                    "startTime": "14:06",
                    "duration": 4
                  },
                  {
                    "name": "Period 9",
                    "startTime": "14:10",
                    "duration": 40
                  },
                  {
                    "name": "Before Period 10",
                    "startTime": "14:50",
                    "duration": 5
                  },
                  {
                    "name": "Period 10",
                    "startTime": "14:55",
                    "duration": 40
                  }
                ]
            },

            // EXTENDED HOMEROOM
            "bell": {
              "scheduleType": "extendedhomeroom",
              "scheduleName": "Extended Homeroom Schedule",
              "schedule": [
                {
                  "name": "Before Period 1",
                  "startTime": "7:00",
                  "duration": 60
                },
                {
                  "name": "Period 1",
                  "startTime": "8:00",
                  "duration": 40
                },
                {
                  "name": "Before Period 2",
                  "startTime": "8:40",
                  "duration": 4
                },
                {
                  "name": "Period 2",
                  "startTime": "8:44",
                  "duration": 39
                },
                {
                  "name": "Before Period 3",
                  "startTime": "9:23",
                  "duration": 4
                },
                {
                  "name": "Period 3",
                  "startTime": "9:27",
                  "duration": 39
                },
                {
                    "name": "Before Homeroom",
                    "startTime": "10:06",
                    "duration": 4
                },
                {
                    "name": "Homeroom",
                    "startTime": "10:10",
                    "duration": 22
                },
                {
                  "name": "Before Period 4",
                  "startTime": "10:32",
                  "duration": 4
                },
                {
                  "name": "Period 4",
                  "startTime": "10:36",
                  "duration": 39
                },
                {
                  "name": "Before Period 5",
                  "startTime": "11:15",
                  "duration": 4
                },
                {
                  "name": "Period 5",
                  "startTime": "11:19",
                  "duration": 39
                },
                {
                  "name": "Before Period 6",
                  "startTime": "11:58",
                  "duration": 4
                },
                {
                  "name": "Period 6",
                  "startTime": "12:02",
                  "duration": 39
                },
                {
                  "name": "Before Period 7",
                  "startTime": "12:41",
                  "duration": 4
                },
                {
                  "name": "Period 7",
                  "startTime": "12:45",
                  "duration": 39
                },
                {
                  "name": "Before Period 8",
                  "startTime": "13:24",
                  "duration": 4
                },
                {
                  "name": "Period 8",
                  "startTime": "13:28",
                  "duration": 39
                },
                {
                  "name": "Before Period 9",
                  "startTime": "14:07",
                  "duration": 4
                },
                {
                  "name": "Period 9",
                  "startTime": "14:11",
                  "duration": 39
                },
                {
                  "name": "Before Period 10",
                  "startTime": "14:50",
                  "duration": 5
                },
                {
                  "name": "Period 10",
                  "startTime": "14:55",
                  "duration": 40
                }
              ]
            },

            // FIRST WEEK
            "bell": {
                "scheduleType": "firstweek",
                "scheduleName": "First Week Schedule",
                "schedule": [
                  {
                    "name": "Before Homeroom",
                    "startTime": "7:30",
                    "duration": 60
                  },
                  {
                    "name": "Homeroom",
                    "startTime": "8:30",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 1",
                    "startTime": "9:00",
                    "duration": 5
                  },
                  {
                    "name": "Period 1",
                    "startTime": "9:05",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 2",
                    "startTime": "9:35",
                    "duration": 4
                  },
                  {
                    "name": "Period 2",
                    "startTime": "9:40",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 3",
                    "startTime": "10:10",
                    "duration": 5
                  },
                  {
                    "name": "Period 3",
                    "startTime": "10:15",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 4",
                    "startTime": "10:45",
                    "duration": 5
                  },
                  {
                    "name": "Period 4",
                    "startTime": "10:50",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 5",
                    "startTime": "11:20",
                    "duration": 5
                  },
                  {
                    "name": "Period 5",
                    "startTime": "11:25",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 6",
                    "startTime": "11:55",
                    "duration": 5
                  },
                  {
                    "name": "Period 6",
                    "startTime": "12:00",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 7",
                    "startTime": "12:30",
                    "duration": 5
                  },
                  {
                    "name": "Period 7",
                    "startTime": "12:35",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 8",
                    "startTime": "13:05",
                    "duration": 5
                  },
                  {
                    "name": "Period 8",
                    "startTime": "13:10",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 9",
                    "startTime": "13:40",
                    "duration": 5
                  },
                  {
                    "name": "Period 9",
                    "startTime": "13:45",
                    "duration": 30
                  },
                  {
                    "name": "Before Period 10",
                    "startTime": "14:15",
                    "duration": 5
                  },
                  {
                    "name": "Period 10",
                    "startTime": "14:20",
                    "duration": 30
                  }
                ]
            },

            // PSAT 2022
            "bell": {
              "scheduleType": "psat",
              "scheduleName": "PSAT Schedule",
              "schedule": [
                {
                  "name": "Before School Open",
                  "startTime": "6:30",
                  "duration": 60
                },
                {
                  "name": "School Open",
                  "startTime": "7:30",
                  "duration": 30
                },
                {
                  "name": "Report to Testing Rooms",
                  "startTime": "8:00",
                  "duration": 15
                },
                {
                  "name": "Before PSAT Begins",
                  "startTime": "8:15",
                  "duration": 15
                },
                {
                  "name": "PSAT",
                  "startTime": "8:30",
                  "duration": 210
                },
                {
                  "name": "Before Lunch",
                  "startTime": "12:00",
                  "duration": 15
                },
                {
                  "name": "Lunch",
                  "startTime": "12:15",
                  "duration": 90
                },
                {
                  "name": "Before Homeroom",
                  "startTime": "13:45",
                  "duration": 5
                },
                {
                  "name": "Homeroom",
                  "startTime": "13:50",
                  "duration": 60
                },
                {
                  "name": "After School",
                  "startTime": "14:50",
                  "duration": 30
                },
              ]
            },

            // Half Day 11/18/22
            "bell": {
              "scheduleType": "halfday",
              "scheduleName": "Half Day Schedule",
              "schedule": [
                {
                  "name": "Before School",
                  "startTime": "7:30",
                  "duration": 45
                },
                {
                  "name": "Period 1",
                  "startTime": "8:15",
                  "duration": 20
                },
                {
                  "name": "Before Period 2",
                  "startTime": "8:35",
                  "duration": 4
                },
                {
                  "name": "Period 2",
                  "startTime": "8:39",
                  "duration": 20
                },
                {
                  "name": "Before Period 3",
                  "startTime": "8:59",
                  "duration": 4
                },
                {
                  "name": "Period 3",
                  "startTime": "9:03",
                  "duration": 20
                },
                {
                  "name": "Before Period 4",
                  "startTime": "9:23",
                  "duration": 4
                },
                {
                  "name": "Period 4",
                  "startTime": "9:27",
                  "duration": 20
                },
                {
                  "name": "Before Period 5",
                  "startTime": "9:47",
                  "duration": 4
                },
                {
                  "name": "Period 5",
                  "startTime": "9:51",
                  "duration": 20
                },
                {
                  "name": "Before Period 6",
                  "startTime": "10:11",
                  "duration": 4
                },
                {
                  "name": "Period 6",
                  "startTime": "10:15",
                  "duration": 20
                },
                {
                  "name": "Before Period 7",
                  "startTime": "10:35",
                  "duration": 4
                },
                {
                  "name": "Period 7",
                  "startTime": "10:39",
                  "duration": 20
                },
                {
                  "name": "Before Period 8",
                  "startTime": "10:59",
                  "duration": 4
                },
                {
                  "name": "Period 8",
                  "startTime": "11:03",
                  "duration": 20
                },
                {
                  "name": "Before Period 9",
                  "startTime": "11:23",
                  "duration": 4
                },
                {
                  "name": "Period 9",
                  "startTime": "11:27",
                  "duration": 20
                },
                {
                  "name": "Before Period 10",
                  "startTime": "11:47",
                  "duration": 4
                },
                {
                  "name": "Period 10",
                  "startTime": "11:51",
                  "duration": 20
                },
                {
                  "name": "After School",
                  "startTime": "12:11",
                  "duration": 708
                }
              ]
            },
        }
    )
}
