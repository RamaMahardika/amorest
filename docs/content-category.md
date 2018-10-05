# Content Category

> Parameter to return all content category, **content listing are not included**. Please refer to the [next section](/content-listing).

## Resources

---

**Base PATH:** `https://api.amospa.com/v1`

| List Resources       | Method | Description                      |
| -------------------- | ------ | -------------------------------- |
| `/content-category/` | Get    | Return all content category data |

**JSON Data Output:**

```json
{
  "status": 200,
  "status_respond": "Success",
  "body": [
      {
          "id": "01",
          "hasChild": true,
          "title": "Spa"
      },
      ...
  ]
}
```

## Reference

---

#### Base {docsify-ignore}

| Property                 | Type      | Description                     |
| ------------------------ | --------- | ------------------------------- |
| status                   | `Number`  | Status code                     |
| status_respond           | `String`  | Status respond                  |
| body                     | `Array`   | Content category output data    |
| body [`Object`] id       | `String`  | Order by id generated on server |
| body [`Object`] hasChild | `Boolean` | Option for content listing      |
| body [`Object`] title    | `String`  | Content category title          |

<div style="
	margin-bottom:350px;
"></div>
