# Content

> This requested is for retrieve all content data, _child content are not included_. Please refer to the next section.

## Content Request

---

| Method | URL |
|-----------|---------|
| Get    | `api.amospa.com/v1/content`     |

__If request processed successfully it will output the json data with status code 200__

```json
{
  "status": 200,
  "status_respond": "Ok",
  "message": "Content List",
  "data": [
    {
      "docId": "content_beauty",
      "data": {
        "title_desc": "Amo Spa",
        "title": "Beauty",
        "has_child": true,
        "banner": ""
      }
    } ...
  ]
}
```

## Content Errors

---

__Error Code__

| Code | Message | Details     |
|-----------|--------------|---|
| 400       | ``BAD REQUEST``  | Invalid request message framing, or deceptive request routing.
| 401       | ``UNAUTHORIZED`` | You need to provide API key to access the data.
| 404       | ``NOT FOUND``    | Make sure your request query are valid.

__Error output__

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