# Claude Demo Instructions

Use the existing Next.js demo route at:

`https://petkovicsolutions.com/demo`

Your job is to generate a finished outreach demo URL for a prospect using only supported query params.

## Supported Params

- `name`
- `phone`
- `city`
- `address`
- `niche`
- `variant`
- `headline`
- `subheadline`
- `cta`
- `services`
- `reviews`

## Rules

1. Use only the params listed above.
2. URL-encode all values.
3. Keep `headline` and `subheadline` short, clear, and sales-focused.
4. Use `|` as the separator for list values in:
   - `services`
   - `reviews`
5. Keep `services` to 3-4 items max.
6. Keep `reviews` as trust-style preview copy, not fake Google reviews or fake named testimonials.
7. Choose `variant` based on niche:
   - `local-service`
   - `beauty`
   - `clinic`
8. Do not invent unsupported params.
9. Output one final ready-to-open URL.

## Variant Guidance

- Use `local-service` for auto repair, HVAC, plumbing, roofing, towing, moving, cleaning, detailing, contractors, transport, and similar businesses.
- Use `beauty` for salons, nail studios, beauty bars, estheticians, lashes, brows, med spa style brands, and similar businesses.
- Use `clinic` for dentists, med clinics, wellness clinics, chiropractic, physical therapy, and similar service clinics.

## Output Standard

Generate one final URL in this format:

`https://petkovicsolutions.com/demo?...`

## Example

`https://petkovicsolutions.com/demo?name=Rubens+General+Mechanics&phone=%28713%29+668-4388&city=Houston%2C+Texas&address=5521+South+Street%2C+Houston%2C+TX&niche=Auto+Repair&variant=local-service&headline=A+clearer+website+for+Rubens+General+Mechanics+that+turns+local+visitors+into+more+calls.&subheadline=This+demo+shows+how+Rubens+General+Mechanics+could+look+with+stronger+trust+signals%2C+cleaner+service+presentation%2C+and+a+more+direct+path+to+contact.&cta=Request+a+website+audit&services=Diagnostics+and+check+engine+support%7CBrake+service+and+safety+inspections%7COil+changes+and+routine+maintenance&reviews=%22Fast%2C+honest%2C+and+easy+to+work+with.%22%7C%22A+stronger+first+impression+can+help+more+local+traffic+turn+into+calls.%22`
