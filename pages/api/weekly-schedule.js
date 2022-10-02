// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and testing will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom

see api/master-schedules.js for all bell schedules
*/

export default function handler(req, res) {
  res.status(200).json(
    {
      "scheduleType": "week",
      "days": [
        {
          "day": "October 3, 2022",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
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
              }
            ]
          },
          "block": "B1",
          "testing": "Science Testing",
          "announcement": null
        },
        {
          "day": "October 4, 2022",
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
                  "startTime": "12:42",
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
          "block": "A1",
          "testing": "WL, ELA, & Health Testing",
          "announcement": "Distribution of I.D. Card Stickers."
        },
        {
          "day": "October 5, 2022",
          "bell": null,
          "block": null,
          "testing": "No Testing",
          "announcement": "Yom Kippur - No School."
        },
        {
          "day": "October 6, 2022",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
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
              }
            ]
          },
          "block": "B2",
          "testing": "Math, Music, & Art Testing",
          "announcement": null
        },
        {
          "day": "October 7, 2022",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
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
              }
            ]
          },
          "block": "A2",
          "testing": "CS, SS, & Tech Testing",
          "announcement": null
        },
        {
          "day": "October 10, 2022",
          "bell": null,
          "block": null,
          "testing": "No Testing",
          "announcement": "Italian Heritage/Indigenous Peoples' Day - No School."
        }
      ]
    }
  )
}