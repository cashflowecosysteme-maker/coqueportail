// NyXia — Coque Portail universelle
// Cette coque ne contient aucune logique métier d'un portail précis.

const PORTAL_CONFIG_B64 = 'eyJpZCI6ImNvcXVlcG9ydGFpbCIsInRpdGxlIjoiUG9ydGFpbCBDb3F1ZSB0ZXN0Iiwic2hvcnRUaXRsZSI6IkNvcXVlIFRlc3QiLCJtaXNzaW9uIjoiQmllbnZlbnVlIHN1ciBsZSBwb3J0YWlsIHRlc3QiLCJ3ZWxjb21lIjoiQmllbnZlbnVlIHN1ciBsZSBwb3J0YWlsIHRlc3QiLCJpY29uIjoi4pymIiwibW9kZSI6InN0YW5kYXJkIiwiZm9ybWF0aW9uQWdlbnQiOiJlcmljIiwiYWN0aXZlQWdlbnRzIjpbIm55eGlhIiwiZGlhbmUiLCJhbGV4IiwiZXJpYyIsImthZWwiLCJsZW5hIiwic2VsZW5hIiwiYWJpbWUiLCJhaW1lZSIsImFsZXRoZWlhIiwiYWxleGFuZHJhIiwiYWxpYmkiLCJjYXNzYW5kcmUiLCJjZWxlc3RlIiwiY29uc3RhbmNlIiwiZGFwaG5lZSIsImR5bGFuIiwiZnJpcG91aWxsZSIsImdhYnJpZWxsZSIsImtldmVuIiwibWFyaWUtcGllciIsIm1lbHVzaW5lIiwic29waGlhIl0sImFnZW50cyI6W3sia2V5Ijoibnl4aWEiLCJuYW1lIjoiTnlYaWEiLCJzdWIiOiJPcmllbnRhdGlvbiAmIHRlY2huaXF1ZSIsImljb24iOiLinKYiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODk0ZGM5NTMzMi4xMjU0MzgzOF9OeVhpYS5wbmciLCJjdXN0b20iOmZhbHNlLCJwb3J0YWlsIjoidG91cyIsInZvaWNlRW52IjoiRUxFVkVOTEFCU19OWVhJQV9WT0lDRV9JRCIsInZvaWNlSWQiOiI0UnNHT2lqVTRORG5taWhvZDIxRSIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJkaWFuZSIsIm5hbWUiOiJEaWFuZSIsInN1YiI6IkNyw6lhdHJpY2UgJiBhY2NvbXBhZ25lbWVudCIsImljb24iOiLwn5GRIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjg5NGRiNTI1MzMuMTc3ODMxNTRfRGlhbmUucG5nIiwiY3VzdG9tIjpmYWxzZSwicG9ydGFpbCI6ImxlbmEiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfRElBTkVfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiSHBQc0VtQlBzOW9rYWR5Uk94cjYiLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiYWxleCIsIm5hbWUiOiJBbGV4Iiwic3ViIjoiw4ljcml0dXJlICYgc3Rvcnl0ZWxsaW5nIiwiaWNvbiI6IuKcje+4jyIsImltYWdlIjoiaHR0cHM6Ly9kMXllaTJ6M2k2azM1ei5jbG91ZGZyb250Lm5ldC8xODcyMTMzLzZhYjY4OTRkY2E3ZWM2Ljg2ODM2NDk3X0FsZXgucG5nIiwiY3VzdG9tIjpmYWxzZSwicG9ydGFpbCI6ImFsZXgiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfQUxFWF9WT0lDRV9JRCIsInZvaWNlSWQiOiIwWjdMbzdjWVZ5ak02V0wwQVAwbiIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJlcmljIiwibmFtZSI6IsOJcmljIiwic3ViIjoiQ29tbXVuaWNhdGlvbiAmIENhc2hGbG93IiwiaWNvbiI6IvCfkrwiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODk0ZGM3MDViMC41MTIxNjI3Ml9FcmljLnBuZyIsImN1c3RvbSI6ZmFsc2UsInBvcnRhaWwiOiJjZXJjbGVzIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0VSSUNfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiIiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6ImthZWwiLCJuYW1lIjoiS2FlbCIsInN1YiI6IlJlbGF0aW9ucyBhbW91cmV1c2VzIiwiaWNvbiI6IvCfkpwiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODk0ZGNhNzJmMC4zNjI5NDc0OF9LYWVsLnBuZyIsImN1c3RvbSI6ZmFsc2UsInBvcnRhaWwiOiJrYWVsIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0tBRUxfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiIiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6ImxlbmEiLCJuYW1lIjoiTMOpbmEiLCJzdWIiOiJTcGlyaXR1YWxpdMOpICYgaW50dWl0aW9uIiwiaWNvbiI6IvCflK4iLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODk0ZGNlYWEyOS4zOTQ4MzIwMV9MZW5hLnBuZyIsImN1c3RvbSI6ZmFsc2UsInBvcnRhaWwiOiJsZW5hIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0xFTkFfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiYVR4WnJTcnA0N3hzUDZPdDRLZ2QiLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5Ijoic2VsZW5hIiwibmFtZSI6IlPDqWzDqW5hIiwic3ViIjoiQS5NLkkuRS4gJiBjcm9pc3NhbmNlIHBlcnNvbm5lbGxlIiwiaWNvbiI6IvCfqp4iLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODk0ZGM5ZTljMC40ODc3ODg0MF9TZWxlbmEucG5nIiwiY3VzdG9tIjpmYWxzZSwicG9ydGFpbCI6InNlbGVuYSIsInZvaWNlRW52IjoiRUxFVkVOTEFCU19TRUxFTkFfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiYkJSc0RKU0FjTDF1YmtydEozaE0iLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiYWJpbWUiLCJuYW1lIjoiQWLDrm1lIiwic3ViIjoiUGVyc29ubmFnZSBOeVhpYSIsImljb24iOiLinKgiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODllYzVlYWRjNS4yMDI4NDU1NV9BYmltZS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiIiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfQUJJTUVfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiZk5tdzhzdWtmR3V2V1ZPcDMzR2UiLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiYWltZWUiLCJuYW1lIjoiQWltw6llIiwic3ViIjoiUGVyc29ubmFnZSBOeVhpYSIsImljb24iOiLinKgiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2ODllYzZmNTM3MS45NjQyMzQ0NV9BaW1lZS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiIiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfQUlNRUVfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiVUpDaTRERG5jdW8wVkpEU0llZ2oiLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiYWxldGhlaWEiLCJuYW1lIjoiQWxldGhlaWEiLCJzdWIiOiJQZXJzb25uYWdlIMK3IGxlbmEiLCJpY29uIjoi4pymIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjhjOWU2ZGFkNzkuOTc5Mzg4NzlfQWxldGhlaWEucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoibGVuYSIsInZvaWNlRW52IjoiRUxFVkVOTEFCU19BTEVUSEVJQV9WT0lDRV9JRCIsInZvaWNlSWQiOiJ0YU9oVkdubmZnbTBnRUpuZkIwZiIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJhbGV4YW5kcmEiLCJuYW1lIjoiQWxleGFuZHJhIiwic3ViIjoiUGVyc29ubmFnZSBOeVhpYSIsImljb24iOiLinKgiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2OGJmODE5NDA3Ni40MTI2ODgxMF9BbGV4YW5kcmEucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoiIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0FMRVhBTkRSQV9WT0lDRV9JRCIsInZvaWNlSWQiOiJFTGYzZVNjU3JKcjBqbjFqRHc4VCIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJhbGliaSIsIm5hbWUiOiJBbGliaSIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjg5ZWM3MmQ1ODEuMzEzMzUxMDFfQWxpYmkucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoiIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0FMSUJJX1ZPSUNFX0lEIiwidm9pY2VJZCI6Iks3Z3gweWxKZGZmMHlqTTJ1VlFTIiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6ImNhc3NhbmRyZSIsIm5hbWUiOiJDYXNzYW5kcmUiLCJzdWIiOiJQZXJzb25uYWdlIMK3IGxlbmEiLCJpY29uIjoi4pymIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjhjOWU2YzI0YTIuODY1MTgxNDVfQ2Fzc2FuZHJlLnBuZyIsImN1c3RvbSI6dHJ1ZSwicG9ydGFpbCI6ImxlbmEiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfQ0FTU0FORFJFX1ZPSUNFX0lEIiwidm9pY2VJZCI6Ill4cndqQUtvVUtVTEdkMGc4SzlZIiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6ImNlbGVzdGUiLCJuYW1lIjoiQ8OpbGVzdGUiLCJzdWIiOiJQZXJzb25uYWdlIMK3IGxlbmEiLCJpY29uIjoi4pymIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjhjOWU2ZGFkNzQuNjU0MzM1ODJfQ2VsZXN0ZS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiJsZW5hIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0NFTEVTVEVfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoiN1ZveHB1QkM0WkljblcxNHlpOW0iLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiY29uc3RhbmNlIiwibmFtZSI6IkNvbnN0YW5jZSIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjg5ZWM3MzQyYjAuMTgwODk3NDhfQ29uc3RhbmNlLnBuZyIsImN1c3RvbSI6dHJ1ZSwicG9ydGFpbCI6IiIsInZvaWNlRW52IjoiRUxFVkVOTEFCU19DT05TVEFOQ0VfVk9JQ0VfSUQiLCJ2b2ljZUlkIjoidTVsMFZOQ2Z6TzVvcXJLVHVBMWUiLCJncmVldGluZyI6IkplIHN1aXMgbMOgLiBEaXMtbW9pIGNlIHF1ZSB0dSB2ZXV4IGZhaXJlIGF2YW5jZXIgZGFucyBjZSBwb3J0YWlsLiJ9LHsia2V5IjoiZGFwaG5lZSIsIm5hbWUiOiJEYXBobsOpZSIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjhiZjgwODdlMTQuNTY1NDA0MTBfRGFwaG5lZS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiIiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfREFQSE5FRV9WT0lDRV9JRCIsInZvaWNlSWQiOiJtQWN0V1FnOWtpYkxybzZaMm91WSIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJkeWxhbiIsIm5hbWUiOiJEeWxhbiIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNWJhZTk3OTI0ODYuNzY2NTc2NzNfRHlsYW4ucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoiIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0RZTEFOX1ZPSUNFX0lEIiwidm9pY2VJZCI6IjkzbnVIYmtlNGRURVI5eDJwRHdFIiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6ImZyaXBvdWlsbGUiLCJuYW1lIjoiRnJpcG91aWxsZSIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNjg5ZWM3NmNjMDAuNzUyNjA1MzVfRnJpcG91aWxsZS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiIiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfRlJJUE9VSUxMRV9WT0lDRV9JRCIsInZvaWNlSWQiOiJwaUk4S2t1MERjdmNMNlRUU2VRdCIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJnYWJyaWVsbGUiLCJuYW1lIjoiR2FicmllbGxlIiwic3ViIjoiUGVyc29ubmFnZSBOeVhpYSIsImljb24iOiLinKgiLCJpbWFnZSI6Imh0dHBzOi8vZDF5ZWkyejNpNmszNXouY2xvdWRmcm9udC5uZXQvMTg3MjEzMy82YWI2OGJmODE3ZDZhNC45Mzg5Njg2OF9HYWJyaWVsbGUucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoiIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0dBQlJJRUxMRV9WT0lDRV9JRCIsInZvaWNlSWQiOiJnQ3I4VGVTSmdKYWVhSW9WNFJXSCIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJrZXZlbiIsIm5hbWUiOiJLZXZlbiIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNWJlNTNjMDMzNzEuNzEzMjUzMjhfS2V2ZW4ucG5nIiwiY3VzdG9tIjp0cnVlLCJwb3J0YWlsIjoiIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX0tFVkVOX1ZPSUNFX0lEIiwidm9pY2VJZCI6IlJURmc5bmlLY2dHTER3YTNSRmx6IiwiZ3JlZXRpbmciOiJKZSBzdWlzIGzDoC4gRGlzLW1vaSBjZSBxdWUgdHUgdmV1eCBmYWlyZSBhdmFuY2VyIGRhbnMgY2UgcG9ydGFpbC4ifSx7ImtleSI6Im1hcmllLXBpZXIiLCJuYW1lIjoiTWFyaWUtUGllciIsInN1YiI6IlBlcnNvbm5hZ2UgTnlYaWEiLCJpY29uIjoi4pyoIiwiaW1hZ2UiOiJodHRwczovL2QxeWVpMnozaTZrMzV6LmNsb3VkZnJvbnQubmV0LzE4NzIxMzMvNmFiNWMxZWYwZmVlYjEuMDQ0NzU5MzZfTWFyaWUtUGllci5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiIiLCJ2b2ljZUVudiI6IkVMRVZFTkxBQlNfTUFSSUVfUElFUl9WT0lDRV9JRCIsInZvaWNlSWQiOiJLN2d4MHlsSmRmZjB5ak0ydVZRUyIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJtZWx1c2luZSIsIm5hbWUiOiJNw6lsdXNpbmUiLCJzdWIiOiJQZXJzb25uYWdlIE55WGlhIiwiaWNvbiI6IuKcqCIsImltYWdlIjoiaHR0cHM6Ly9kMXllaTJ6M2k2azM1ei5jbG91ZGZyb250Lm5ldC8xODcyMTMzLzZhYjY4OWVjNmY1MzczLjYwMjgzOTEyX01lbHVzaW5lLnBuZyIsImN1c3RvbSI6dHJ1ZSwicG9ydGFpbCI6IiIsInZvaWNlRW52IjoiRUxFVkVOTEFCU19NRUxVU0lORV9WT0lDRV9JRCIsInZvaWNlSWQiOiJpQjBQd2Y1Vll0N1VEQnJHck1xSCIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn0seyJrZXkiOiJzb3BoaWEiLCJuYW1lIjoiU29waGlhIiwic3ViIjoiUGVyc29ubmFnZSDCtyBsZW5hIiwiaWNvbiI6IuKcpiIsImltYWdlIjoiaHR0cHM6Ly9kMXllaTJ6M2k2azM1ei5jbG91ZGZyb250Lm5ldC8xODcyMTMzLzZhYjY4YzllNmMyNGE4LjM3NjU1ODc3X1NvcGhpYS5wbmciLCJjdXN0b20iOnRydWUsInBvcnRhaWwiOiJsZW5hIiwidm9pY2VFbnYiOiJFTEVWRU5MQUJTX1NPUEhJQV9WT0lDRV9JRCIsInZvaWNlSWQiOiJXUUt3QlYyVXp3MWdTR3I2OU44SSIsImdyZWV0aW5nIjoiSmUgc3VpcyBsw6AuIERpcy1tb2kgY2UgcXVlIHR1IHZldXggZmFpcmUgYXZhbmNlciBkYW5zIGNlIHBvcnRhaWwuIn1dLCJ2b2ljZVZhcmlhYmxlcyI6eyJFTEVWRU5MQUJTX05ZWElBX1ZPSUNFX0lEIjoiNFJzR09palU0TkRubWlob2QyMUUiLCJFTEVWRU5MQUJTX0RJQU5FX1ZPSUNFX0lEIjoiSHBQc0VtQlBzOW9rYWR5Uk94cjYiLCJFTEVWRU5MQUJTX0FMRVhfVk9JQ0VfSUQiOiIwWjdMbzdjWVZ5ak02V0wwQVAwbiIsIkVMRVZFTkxBQlNfTEVOQV9WT0lDRV9JRCI6ImFUeFpyU3JwNDd4c1A2T3Q0S2dkIiwiRUxFVkVOTEFCU19TRUxFTkFfVk9JQ0VfSUQiOiJiQlJzREpTQWNMMXVia3J0SjNoTSIsIkVMRVZFTkxBQlNfQUJJTUVfVk9JQ0VfSUQiOiJmTm13OHN1a2ZHdXZXVk9wMzNHZSIsIkVMRVZFTkxBQlNfQUlNRUVfVk9JQ0VfSUQiOiJVSkNpNEREbmN1bzBWSkRTSWVnaiIsIkVMRVZFTkxBQlNfQUxFVEhFSUFfVk9JQ0VfSUQiOiJ0YU9oVkdubmZnbTBnRUpuZkIwZiIsIkVMRVZFTkxBQlNfQUxFWEFORFJBX1ZPSUNFX0lEIjoiRUxmM2VTY1NySnIwam4xakR3OFQiLCJFTEVWRU5MQUJTX0FMSUJJX1ZPSUNFX0lEIjoiSzdneDB5bEpkZmYweWpNMnVWUVMiLCJFTEVWRU5MQUJTX0NBU1NBTkRSRV9WT0lDRV9JRCI6Ill4cndqQUtvVUtVTEdkMGc4SzlZIiwiRUxFVkVOTEFCU19DRUxFU1RFX1ZPSUNFX0lEIjoiN1ZveHB1QkM0WkljblcxNHlpOW0iLCJFTEVWRU5MQUJTX0NPTlNUQU5DRV9WT0lDRV9JRCI6InU1bDBWTkNmek81b3FyS1R1QTFlIiwiRUxFVkVOTEFCU19EQVBITkVFX1ZPSUNFX0lEIjoibUFjdFdRZzlraWJMcm82WjJvdVkiLCJFTEVWRU5MQUJTX0RZTEFOX1ZPSUNFX0lEIjoiOTNudUhia2U0ZFRFUjl4MnBEd0UiLCJFTEVWRU5MQUJTX0ZSSVBPVUlMTEVfVk9JQ0VfSUQiOiJwaUk4S2t1MERjdmNMNlRUU2VRdCIsIkVMRVZFTkxBQlNfR0FCUklFTExFX1ZPSUNFX0lEIjoiZ0NyOFRlU0pnSmFlYUlvVjRSV0giLCJFTEVWRU5MQUJTX0tFVkVOX1ZPSUNFX0lEIjoiUlRGZzluaUtjZ0dMRHdhM1JGbHoiLCJFTEVWRU5MQUJTX01BUklFX1BJRVJfVk9JQ0VfSUQiOiJLN2d4MHlsSmRmZjB5ak0ydVZRUyIsIkVMRVZFTkxBQlNfTUVMVVNJTkVfVk9JQ0VfSUQiOiJpQjBQd2Y1Vll0N1VEQnJHck1xSCIsIkVMRVZFTkxBQlNfU09QSElBX1ZPSUNFX0lEIjoiV1FLd0JWMlV6dzFnU0dyNjlOOEkifSwic291cmNlQ2F0YWxvZyI6InVuaXZlcnM6L2FwaS9wZXJzb25uYWdlcyJ9';
const SESSION_TTL = 60 * 60 * 12;
const OPENROUTER_MODEL = 'deepseek/deepseek-v3.2';
const OPENROUTER_FALLBACK_MODEL = 'mistralai/mistral-small-3.2-24b-instruct';

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers }
  });
}

function portalRuntimeConfig() {
  const fallback = {
    id: 'portail', title: 'Portail NyXia', shortTitle: 'Portail', mission: '', welcome: '',
    formationAgent: '', activeAgents: [], agents: [], voiceVariables: {}
  };
  try {
    const raw = String(PORTAL_CONFIG_B64 || '');
    if (!raw || raw.includes('__PORTAL_CONFIG_B64__')) return fallback;
    const bytes = Uint8Array.from(atob(raw), c => c.charCodeAt(0));
    return Object.assign({}, fallback, JSON.parse(new TextDecoder().decode(bytes)));
  } catch (_) { return fallback; }
}
const PORTAL = portalRuntimeConfig();
const ACTIVE_AGENTS = new Set((PORTAL.activeAgents || []).map(x => String(x || '').toLowerCase()));
const AGENT_MAP = Object.fromEntries((PORTAL.agents || []).map(a => [String(a.key || '').toLowerCase(), a]));

function randomToken() { return crypto.randomUUID() + crypto.randomUUID(); }
function normalizeEmail(v) { return String(v || '').trim().toLowerCase(); }
function safeString(v, max = 8000) { return String(v == null ? '' : v).slice(0, max); }
function isHttpsUrl(v) { try { const u = new URL(String(v || '')); return u.protocol === 'https:'; } catch (_) { return false; } }
function agentKey(v) { return String(v || '').trim().toLowerCase(); }
function getAgent(key) { return AGENT_MAP[agentKey(key)] || null; }

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(text || '')));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' }, keyMaterial, 256);
  return [...new Uint8Array(bits)].map(b => b.toString(16).padStart(2, '0')).join('');
}
async function verifyPassword(password, salt, hash) { return (await hashPassword(password, salt)) === hash; }
async function verifyPasswordAffil(password, stored) {
  if (!stored || !stored.startsWith('$sha256$')) return false;
  const parts = stored.split('$');
  if (parts.length < 4) return false;
  const data = new TextEncoder().encode(parts[2] + password);
  const buf = await crypto.subtle.digest('SHA-256', data);
  const got = [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  return got === parts[3];
}

async function getSessionOrNull(token, env) {
  if (!token || !env.CASHFLOW_KV) return null;
  const raw = await env.CASHFLOW_KV.get('session:' + token);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (_) { return null; }
}

async function handleLogin(request, env) {
  const body = await request.json().catch(() => ({}));
  const email = normalizeEmail(body.email);
  const password = String(body.password || '');
  const firstname = String(body.firstname || body.firstName || '').trim();
  if (!email || !password) return json({ error: 'Courriel et mot de passe requis.' }, 400);

  if (env.DB) {
    try {
      const rows = await env.DB.prepare(
        `SELECT id, email, password_hash, full_name, role, affiliate_code, paypal_email
         FROM users WHERE email = ? AND role IN ('admin','affiliate')
         ORDER BY CASE role WHEN 'admin' THEN 0 ELSE 1 END, created_at ASC`
      ).bind(email).all();
      for (const user of (rows.results || [])) {
        if (await verifyPasswordAffil(password, user.password_hash)) {
          const token = randomToken();
          const session = {
            email: user.email, firstname: user.full_name || firstname || '', role: user.role || '',
            code: user.affiliate_code || '', paypal: user.paypal_email || '', userId: user.id
          };
          await env.CASHFLOW_KV.put('session:' + token, JSON.stringify(session), { expirationTtl: SESSION_TTL });
          return json({ success: true, token, firstname: session.firstname, role: session.role, code: session.code });
        }
      }
    } catch (e) { console.log('login D1', e && e.message); }
  }

  if (env.CASHFLOW_KV) {
    const raw = await env.CASHFLOW_KV.get('client:' + email);
    if (raw) {
      try {
        const client = JSON.parse(raw);
        const valid = await verifyPassword(password, client.salt, client.passwordHash);
        if (valid) {
          const token = randomToken();
          const session = { email: client.email || email, firstname: client.firstName || client.name || firstname || '' };
          await env.CASHFLOW_KV.put('session:' + token, JSON.stringify(session), { expirationTtl: SESSION_TTL });
          return json({ success: true, token, firstname: session.firstname });
        }
      } catch (_) {}
    }
  }
  return json({ error: 'Courriel ou mot de passe incorrect.' }, 401);
}

async function handleCheckAuth(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionOrNull(body.token, env);
  if (!session) return json({ valid: false });
  return json({ valid: true, email: session.email || '', firstname: session.firstname || '', role: session.role || '', code: session.code || '', portal: PORTAL.id, portal_access: true });
}
async function handleLogout(request, env) {
  const body = await request.json().catch(() => ({}));
  if (body.token && env.CASHFLOW_KV) await env.CASHFLOW_KV.delete('session:' + body.token);
  return json({ success: true });
}

// ───────────── FORMATION VIVANTE ─────────────
function portalSlug(env) { return String((env && (env.PORTAIL || env.PORTAL_SLUG)) || PORTAL.id || 'portail').toLowerCase(); }
function formationProgressKey(env, email) { return 'formation_progress:' + portalSlug(env) + ':' + normalizeEmail(email); }
function normalizeFormationModules(f) {
  return (Array.isArray(f && f.modules) ? f.modules : []).map((m, i) => ({
    id: String(m && m.id || ('m' + (i + 1))), numero: Number.isFinite(m && m.numero) ? m.numero : i + 1,
    titre: String(m && m.titre || ('Module ' + (i + 1))), blocs: Array.isArray(m && m.blocs) ? m.blocs : []
  }));
}
async function listFormations(env, agent) {
  if (!env.CASHFLOW_KV) return [];
  const portal = portalSlug(env), out = [], seen = new Set();
  const prefixes = ['formation:' + portal + ':' + agent + ':', 'formation:' + agent + ':'];
  for (const prefix of prefixes) {
    if (out.length && prefix === 'formation:' + agent + ':') break; // le spécifique au portail gagne
    let cursor;
    do {
      const list = await env.CASHFLOW_KV.list({ prefix, cursor });
      for (const k of (list.keys || [])) {
        const raw = await env.CASHFLOW_KV.get(k.name); if (!raw) continue;
        try { const f = JSON.parse(raw); if (f && f.id && !seen.has(f.id)) { seen.add(f.id); out.push(f); } } catch (_) {}
      }
      cursor = list.list_complete ? null : list.cursor;
    } while (cursor);
  }
  out.sort((a,b)=>(a.ordre||0)-(b.ordre||0)||String(a.titre||'').localeCompare(String(b.titre||''),'fr'));
  return out;
}
async function getFormationProgress(env, email) {
  if (!env.CASHFLOW_KV || !email) return {};
  try { return JSON.parse(await env.CASHFLOW_KV.get(formationProgressKey(env,email)) || '{}'); } catch (_) { return {}; }
}
async function saveFormationProgress(env, email, formationId, state) {
  if (!env.CASHFLOW_KV || !email || !formationId) return;
  const all = await getFormationProgress(env,email); all[formationId] = { ...state, updatedAt: new Date().toISOString() };
  await env.CASHFLOW_KV.put(formationProgressKey(env,email), JSON.stringify(all));
}
function renderFormationBlock(bloc, ctx) {
  const b = bloc || {}, type = String(b.type || 'texte').toLowerCase(), parts = [];
  if (type === 'texte' || type === 'intervention') parts.push(String(b.contenu || '').replace(/\{prenom\}/gi, ctx.prenom || 'toi'));
  else if (type === 'exercice') { if (b.objectif) parts.push('🎯 ' + b.objectif); if (b.consigne) parts.push(String(b.consigne).replace(/\{prenom\}/gi,ctx.prenom||'toi')); }
  else if (type === 'image' && isHttpsUrl(b.url)) { if (b.legende) parts.push(b.legende); parts.push('[IMAGE: ' + String(b.url).trim() + ']'); }
  else if (type === 'audio' && isHttpsUrl(b.url)) { if (b.intro) parts.push(b.intro); parts.push('[AUDIO: ' + String(b.url).trim() + (b.titre ? '|' + b.titre : '') + ']'); }
  else if ((type === 'video' || type === 'vidéo') && isHttpsUrl(b.url)) { if (b.intro) parts.push(b.intro); parts.push('[VIDEO: ' + String(b.url).trim() + (b.titre ? '|' + b.titre : '') + ']'); }
  else if (type === 'lien' && isHttpsUrl(b.url)) { if (b.intro) parts.push(b.intro); parts.push('[LINK: ' + String(b.url).trim() + '|' + (b.titre || 'Ouvrir la ressource') + ']'); }
  return parts.filter(Boolean).join('\n\n');
}
function parseFormationControl(message) {
  const s = String(message || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const moduleMatch = s.match(/module\s*(\d+)/);
  if (moduleMatch) return { action:'module', moduleNumero:Number(moduleMatch[1]) };
  if (/(commenc|debut|demarr).*(formation|cours)|commence ma formation/.test(s)) return { action:'start' };
  if (/(continue|reprend|reprendre).*(formation|cours)|continue ma formation/.test(s)) return { action:'resume' };
  if (/^(suite|suivant|continue|ok suite|prochaine etape)\b/.test(s.trim())) return { action:'advance' };
  return null;
}
async function runFormationControlTurn(env, session, agent, message) {
  const ctrl = parseFormationControl(message); if (!ctrl) return null;
  const forms = await listFormations(env,agent); if (!forms.length) return null;
  const progressAll = await getFormationProgress(env,session.email); let formation = forms[0];
  let state = progressAll[formation.id] || null; const modules = normalizeFormationModules(formation); if (!modules.length) return { content:'Cette formation n’a pas encore de module.' };
  let mi = 0, bi = 0;
  if (ctrl.action === 'module') { mi = Math.max(0,modules.findIndex(m=>m.numero===ctrl.moduleNumero)); if (mi < 0) mi = 0; }
  else if ((ctrl.action === 'resume' || ctrl.action === 'advance') && state) { mi = Math.max(0,Number(state.moduleIndex)||0); bi = Math.max(0,Number(state.blockIndex)||0); if (ctrl.action === 'advance') bi++; }
  if (mi >= modules.length) mi = modules.length - 1;
  while (mi < modules.length && bi >= modules[mi].blocs.length) { mi++; bi = 0; }
  if (mi >= modules.length) return { content:'✨ Tu as terminé « ' + (formation.titre || 'la formation') + ' ». Tu peux maintenant me poser tes questions ou revoir un module.' };
  const module = modules[mi]; const bloc = module.blocs[bi];
  if (!bloc) return { content:'Le module « '+module.titre+' » ne contient pas encore de contenu.' };
  await saveFormationProgress(env,session.email,formation.id,{moduleIndex:mi,blockIndex:bi,moduleId:module.id,moduleNumero:module.numero});
  const body = renderFormationBlock(bloc,{prenom:session.firstname||'toi'});
  const hint = (bi === module.blocs.length-1 && mi === modules.length-1) ? '\n\n— Tu es à la dernière étape. Dis-moi « suite » pour conclure.' : '\n\n— Quand tu es prête, dis-moi « suite ».';
  return { content:'🎓 **'+(formation.titre||'Formation')+' — Module '+module.numero+' · '+module.titre+'**\n\n'+body+hint };
}
async function handleFormationList(request, env) {
  const url = new URL(request.url), token = url.searchParams.get('token') || '';
  const session = await getSessionOrNull(token,env); if (!session) return json({error:'Session expirée.'},401);
  const agent = agentKey(url.searchParams.get('agent'));
  if (!ACTIVE_AGENTS.has(agent)) return json({error:'Personnage non disponible.'},403);
  const forms = await listFormations(env,agent), prog = await getFormationProgress(env,session.email);
  const rows = forms.map(f=>({id:f.id,titre:f.titre||'',description:f.description||'',modules:normalizeFormationModules(f).map(m=>({id:m.id,numero:m.numero,titre:m.titre})),progress:prog[f.id]||null}));
  return json({formations:rows,hasProgress:rows.some(f=>!!f.progress)});
}

// ───────────── VECTORIZE / MÉMOIRE ─────────────
async function retrieveBrain(env, agent, query, topK = 7) {
  if (!query || !query.trim() || !env.AI || !env.VECTORIZE_INDEX) return '';
  try {
    const embeddings = await env.AI.run('@cf/baai/bge-m3',{text:[query]});
    const results = await env.VECTORIZE_INDEX.query(embeddings.data[0],{topK,returnMetadata:'all',namespace:agent});
    const picked = (results.matches || []).filter(m=>m.score>0.35); const parts=[];
    for (const m of picked) {
      let body = m.metadata && m.metadata.texte_original || '';
      if (m.metadata && m.metadata.has_full === '1' && m.id && env.CASHFLOW_KV) {
        try { body = await env.CASHFLOW_KV.get('brain_text:'+agent+':'+m.id) || body; } catch (_) {}
      }
      if (body) parts.push(body);
    }
    return parts.join('\n\n---\n\n');
  } catch (e) { console.log('Vectorize',e&&e.message); return ''; }
}
function collectUrls(text) {
  const set = new Set(); const s = String(text || '');
  const re = /https:\/\/[^\s\]\)"'<>]+/g; let m; while ((m = re.exec(s))) set.add(m[0].replace(/[.,;:]+$/,''));
  return set;
}
function sanitizeMediaMarkers(content, approved) {
  let out = String(content || '');
  for (const kind of ['VIDEO','AUDIO','IMAGE','PDF','LINK']) {
    const re = new RegExp('\\['+kind+'\\s*:\\s*([^\\]\\r\\n]+)\\]','giu');
    out = out.replace(re, (full, raw) => {
      const val = String(raw||''); const pipe = val.indexOf('|'); const url=(pipe>-1?val.slice(0,pipe):val).trim();
      if (!isHttpsUrl(url) || !approved.has(url)) return '';
      return full;
    });
  }
  return out.replace(/\n{3,}/g,'\n\n').trim();
}
function baseSystemPrompt(agent) {
  const name = agent.name || agent.key || 'Personnage NyXia';
  const sub = agent.sub || 'Accompagnement NyXia';
  let role = `Tu incarnes ${name}, personnage numérique de l'univers NyXia. Ta fonction dans CE portail : ${sub}.`;
  if (agent.key === 'nyxia') role += ` Tu es la guide d'orientation et de technique du portail : tu aides à comprendre où aller, comment utiliser les fonctions et comment progresser sans inventer d'outil absent.`;
  if (agent.key === 'diane') role += ` Tu représentes la créatrice et formatrice. Tu enseignes à partir des ressources de Diane réellement retrouvées et tu accompagnes de manière concrète.`;
  if (agent.key === 'eric') role += ` Tu aides surtout avec communication, marketing relationnel et CashFlow lorsque les ressources du portail le permettent, sans inventer d'offre ou de prix.`;
  role += `\n\nPortail : ${PORTAL.title}. Mission : ${PORTAL.mission || 'Accompagner la personne dans la mission du portail.'}`;
  role += `\n\nRègles : tutoie la personne; reste fidèle aux documents réellement fournis; si l'information manque, dis-le clairement; n'invente ni prix, ni fonction, ni ressource, ni lien.`;
  role += `\n\nMÉDIAS : si le contexte contient une adresse HTTPS approuvée réellement pertinente, tu peux l'envoyer dans la conversation avec EXACTEMENT l'un des marqueurs [VIDEO: URL], [AUDIO: URL], [IMAGE: URL], [PDF: URL|Titre], [LINK: URL|Titre]. Ces marqueurs fonctionnent aussi HORS Formation Vivante. N'invente jamais une URL et n'utilise jamais une adresse absente du contexte ou du message de la personne. Les liens YouTube et Google Drive sont acceptés.`;
  return role;
}
async function callOpenRouter(env,messages,model) {
  const key = env.OPENROUTER_API_KEY || env.AI_API_KEY; if (!key) return null;
  return fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key,'HTTP-Referer':env.SITE_URL||'https://nyxia.top','X-Title':'NyXia — '+(PORTAL.title||'Portail')},body:JSON.stringify({model,messages,max_tokens:12000,reasoning:{enabled:false}})});
}
async function handleChat(request, env) {
  const body = await request.json().catch(()=>({})); const token=body.token, agent=agentKey(body.agent), message=safeString(body.message,20000);
  const session = await getSessionOrNull(token,env); if (!session) return json({error:'Session expirée. Reconnecte-toi.'},401);
  if (!ACTIVE_AGENTS.has(agent) || !getAgent(agent)) return json({error:'Personnage non disponible dans ce portail.'},403);
  try { const controlled=await runFormationControlTurn(env,session,agent,message); if(controlled&&controlled.content)return json(controlled); } catch (_) {}
  const meta=getAgent(agent); let system=baseSystemPrompt(meta).replace(/\{first_name\}/g,body.userName||session.firstname||'toi');
  let bank=''; if(env.CASHFLOW_KV){try{bank=await env.CASHFLOW_KV.get('prompts:'+agent)||''}catch(_){}}
  if(bank)system+='\n\nINSTRUCTIONS ET RESSOURCES CENTRALES DU PERSONNAGE :\n'+bank;
  const brain=await retrieveBrain(env,agent,message); if(brain)system+='\n\nMÉMOIRE VECTORISÉE DU PERSONNAGE — utilise-la fidèlement :\n'+brain;
  const forms=await listFormations(env,agent); if(forms.length)system+='\n\nFormation Vivante disponible : '+forms.map(f=>f.titre).filter(Boolean).join(' · ')+'. Si la personne veut la suivre, invite-la à dire « commence ma formation » ou « continue ma formation ».';
  const approved=collectUrls(bank+'\n'+brain+'\n'+message); const history=Array.isArray(body.history)?body.history.slice(-14):[];
  const messages=[{role:'system',content:system},...history.map(m=>({role:m.role==='assistant'?'assistant':'user',content:safeString(m.content,20000)}))];
  if(body.attachment&&body.attachment.dataUrl&&String(body.attachment.type||'').startsWith('image/')) messages.push({role:'user',content:[{type:'text',text:message||'Analyse cette image.'},{type:'image_url',image_url:{url:body.attachment.dataUrl}}]});
  else messages.push({role:'user',content:message});
  let resp=await callOpenRouter(env,messages,OPENROUTER_MODEL); if(!resp)return json({error:'OPENROUTER_API_KEY non configurée.'},500);
  if(!resp.ok)resp=await callOpenRouter(env,messages,OPENROUTER_FALLBACK_MODEL); if(!resp||!resp.ok)return json({error:'Le modèle IA est momentanément indisponible.'},502);
  const data=await resp.json().catch(()=>({})); let content=data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content||'';
  content=sanitizeMediaMarkers(content,approved); if(!content)content='Petite interruption… réessaie dans un instant 💜'; return json({content});
}

// ───────────── VOIX ELEVENLABS ─────────────
function voiceIdForAgent(env,key) {
  const a=getAgent(key); if(!a)return''; const envName=a.voiceEnv || ('ELEVENLABS_'+String(key).toUpperCase().replace(/[^A-Z0-9]+/g,'_')+'_VOICE_ID');
  return String(env[envName] || a.voiceId || '').trim();
}
async function handleTTS(request,env) {
  const body=await request.json().catch(()=>({})); const session=await getSessionOrNull(body.token,env); if(!session)return json({error:'Session expirée.'},401);
  const key=agentKey(body.agent); if(!ACTIVE_AGENTS.has(key))return json({error:'Personnage non disponible.'},403);
  const voice=voiceIdForAgent(env,key); if(!voice)return json({error:'Voix ElevenLabs non configurée pour ce personnage.'},404);
  if(!env.ELEVENLABS_API_KEY)return json({error:'ELEVENLABS_API_KEY non configurée.'},500);
  const clean=String(body.text||'').replace(/\[(VIDEO|AUDIO|IMAGE|PDF|LINK)\s*:[^\]]+\]/gi,'').slice(0,4500); if(!clean)return json({error:'Texte requis.'},400);
  const cacheKey='tts_cache_elevenlabs:'+key+':'+await sha256Hex(clean); const cached=await env.CASHFLOW_KV.get(cacheKey,'arrayBuffer');
  if(cached)return json({success:true,proxyUrl:'/api/tts/cached-audio?key='+encodeURIComponent(cacheKey)+'&token='+encodeURIComponent(body.token),cached:true});
  const resp=await fetch('https://api.elevenlabs.io/v1/text-to-speech/'+encodeURIComponent(voice),{method:'POST',headers:{'xi-api-key':env.ELEVENLABS_API_KEY,'Content-Type':'application/json','Accept':'audio/mpeg'},body:JSON.stringify({text:clean,model_id:'eleven_multilingual_v2',voice_settings:{stability:.5,similarity_boost:.75}})});
  if(!resp.ok)return json({error:'ElevenLabs indisponible pour cette voix.'},502); const audio=await resp.arrayBuffer(); await env.CASHFLOW_KV.put(cacheKey,audio,{expirationTtl:60*60*24*30});
  return json({success:true,proxyUrl:'/api/tts/cached-audio?key='+encodeURIComponent(cacheKey)+'&token='+encodeURIComponent(body.token)});
}
async function handleCachedAudio(request,env) {
  const u=new URL(request.url),token=u.searchParams.get('token'),key=u.searchParams.get('key'); const session=await getSessionOrNull(token,env); if(!session)return new Response('Unauthorized',{status:401}); if(!key||!key.startsWith('tts_cache_elevenlabs:'))return new Response('Not found',{status:404});
  const buf=await env.CASHFLOW_KV.get(key,'arrayBuffer'); if(!buf)return new Response('Not found',{status:404}); return new Response(buf,{headers:{'Content-Type':'audio/mpeg','Cache-Control':'private, max-age=86400'}});
}

function staticRequest(request,path){return new Request(new URL(path,request.url),request);}

export default {
  async fetch(request,env) {
    const url=new URL(request.url),path=url.pathname;
    try {
      if(path==='/api/login'&&request.method==='POST')return handleLogin(request,env);
      if(path==='/api/check-auth'&&request.method==='POST')return handleCheckAuth(request,env);
      if(path==='/api/logout'&&request.method==='POST')return handleLogout(request,env);
      if(path==='/api/chat'&&request.method==='POST')return handleChat(request,env);
      if(path==='/api/formation/list'&&request.method==='GET')return handleFormationList(request,env);
      if(path==='/api/tts/nyxia'&&request.method==='POST')return handleTTS(request,env);
      if(path==='/api/tts/cached-audio'&&request.method==='GET')return handleCachedAudio(request,env);
    } catch(e) { console.error(e); return json({error:'Erreur serveur.',detail:String(e&&e.message||e)},500); }
    if(env.ASSETS){
      if(path==='/'||path==='')return env.ASSETS.fetch(staticRequest(request,'/index.html'));
      if(path==='/login')return env.ASSETS.fetch(staticRequest(request,'/login.html'));
      if(path==='/dashbord'||path==='/dashboard')return env.ASSETS.fetch(staticRequest(request,'/dashbord.html'));
      return env.ASSETS.fetch(request);
    }
    return new Response('Not found',{status:404});
  }
};
