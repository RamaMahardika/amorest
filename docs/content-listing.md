# Content Child

> Parameter for retrieve all content listing data.

## Resources

---

**Base PATH:** `https://api.amospa.com/v1`

| List Resources                       | Method | Description                                                                             |
| ------------------------------------ | ------ | --------------------------------------------------------------------------------------- |
| `/content-child/`                    | Get    | Return [`All Content Listing`](/content-listing?id=all-content-listing)                 |
| `/content-child/{category}`          | Get    | Return [`Listing by Content Category`](/content-listing?id=listing-by-content-category) |
| `/content-child/{category}/{single}` | Get    | Return [`Single Listing`](/content-listing?id=single-listing)                           |

## All Content Listing

```json
{
  "status": 200,
  "status_respond": "Success",
  "body": {
      "next": ["beauty", "body", "cafe", "hair" ],
      "listing": [
          {
              "parrent": "beauty",
              "title": "Facial",
              "titleDesc": "Amo Spa",
              "banner": "https://www.amospa.com/apps/resources/banner/content-beauty.jpg",
              "desc": "Description..."
          },
          ...
      ]
  }
}
```

##### Reference {docsify-ignore}

---

| Property                              | Type     | Description                 |
| ------------------------------------- | -------- | --------------------------- |
| status                                | `Number` | Status code                 |
| status_respond                        | `String` | Status respond              |
| body                                  | `Array`  | Content listing output data |
| [`body`] next                         | `Array`  | Next available request      |
| [`body`] listing                      | `array`  | Array of listing            |
| [`body`] listing [`Object`] category  | `String` | Content category            |
| [`body`] listing [`Object`] title     | `String` | Content title               |
| [`body`] listing [`Object`] titleDesc | `String` | Content title description   |
| [`body`] listing [`Object`] banner    | `String` | Banner image path           |
| [`body`] listing [`Object`] desc      | `String` | Content description         |

## Listing by Content Category

```json
{
  "status": 200,
  "status_respond": "Success",
  "body": {
      "category": "Beauty",
      "next": ["facial", "full-body"],
      "listing": [
          {
              "title": "Facial",
              "titleDesc": "Amo Spa",
              "banner": "https://www.amospa.com/apps/resources/banner/content-beauty.jpg",
              "desc": "Description..."
          },
          ...
      ]
  }
}
```

##### Reference {docsify-ignore}

---

##### Body Object (By Category) {docsify-ignore}

| Property                              | Type     | Description                 |
| ------------------------------------- | -------- | --------------------------- |
| status                                | `Number` | Status code                 |
| status_respond                        | `String` | Status respond              |
| body                                  | `Array`  | Content listing output data |
| [`body`] category                     | `Array`  | Content category            |
| [`body`] next                         | `Array`  | Next available request      |
| [`body`] listing                      | `array`  | Array of listing            |
| [`body`] listing [`Object`] title     | `String` | Content title               |
| [`body`] listing [`Object`] titleDesc | `String` | Content title description   |
| [`body`] listing [`Object`] banner    | `String` | Banner image path           |
| [`body`] listing [`Object`] desc      | `String` | Content description         |

## Single Listing

```json
{
	"status": 200,
	"status_respond": "Success",
	"body": {
		"title": "Facial",
		"titleDesc": "Amo Spa",
		"banner": "https://www.amospa.com/apps/resources/banner/content-beauty.jpg",
		"desc": "Description..."
	}
}
```

##### Reference {docsify-ignore}

---

##### Body Object (Single Listing) {docsify-ignore}

| Property             | Type     | Description                 |
| -------------------- | -------- | --------------------------- |
| status               | `Number` | Status code                 |
| status_respond       | `String` | Status respond              |
| body                 | `Object` | Content listing output data |
| [`Object`] title     | `String` | Content title               |
| [`Object`] titleDesc | `String` | Content title description   |
| [`Object`] banner    | `String` | Banner image path           |
| [`Object`] desc      | `String` | Content description         |

<div style="
	margin-bottom:150px;
"></div>
