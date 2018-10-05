# Content

> Parameter for retrieve all content data, _child content are not included_. Please refer to the next section.

## Content Request

---

| Method | URL                         |
| ------ | --------------------------- |
| Get    | `api.amospa.com/v1/content` |

**If request processed successfully it will output the json data with status code 200**

```json
{
	"status": 200,
	"status_respond": "Success",
	"body": [
		{
			"id": "01",
			"title": "Amo Spa",
			"titleDesc": "Amo Spa",
			"hasChild": true,
			"banner": "https://www.amospa.com/apps/resources/beauty-banner.jpg"
		},
		{}
	]
}
```

## Content Errors

---

**Error Code**

| Code | Message        | Details                                                        |
| ---- | -------------- | -------------------------------------------------------------- |
| 400  | `BAD REQUEST`  | Invalid request message framing, or deceptive request routing. |
| 401  | `UNAUTHORIZED` | You need to provide API key to access the data.                |
| 404  | `NOT FOUND`    | Make sure your request query are valid.                        |

**Error output**

```json
{
  "status": {Err Code},
  "status_respond": "{ERR Message}",
  "message": "{Err Details}"
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;