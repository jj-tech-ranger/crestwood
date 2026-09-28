# Crestwood University Student Information Portal

A static university information portal built with HTML5, CSS3 and vanilla JavaScript.

## Current project structure

The repository currently uses a flat root structure for the website files. The structure below reflects the files that are actually present in the repository rather than an assumed `css/` or `js/` directory layout.

```
crestwood/
├── index.html
├── about.html
├── programmes.html
├── services.html
├── application.html
├── contact.html
├── style.css
├── script.js
├── README.md
├── media/
│   ├── campus-hero.jpg
│   ├── about-campus.jpg
│   ├── students-programmes.jpg
│   ├── student-services.jpg
│   ├── application-campus.jpg
│   ├── contact-campus.jpg
│   └── crestwood-intro.mp4
└── .idea/
    ├── .name
    ├── php.xml
    ├── vcs.xml
    ├── modules.xml
    ├── crestwood.iml
    └── inspectionProfiles/
        └── Project_Default.xml
```

### Website pages

- `index.html` — home page, hero section, university overview, statistics, programme imagery, multimedia and application call-to-action.
- `about.html` — university overview, history, mission, vision, motto and faculties.
- `programmes.html` — academic programme information and programme table.
- `services.html` — student support, counselling and wellness, careers, accommodation, financial aid, sport and recreation, and academic advising.
- `application.html` — front-end application form and client-side validation.
- `contact.html` — contact information and front-end contact form.
- `style.css` — all site styling, responsive layout rules, typography and the brand palette.
- `script.js` — client-side interactions, form behaviour, validation and programme-selection logic.
- `media/` — locally referenced image and video assets.

The `.idea/` directory contains IDE/project metadata and is not required for the website itself.

## Brand system

The visual system uses the following palette and typography:

- Navy: `#081735`, `#0B1F4B`, `#1B3A80`
- Pastel purple: `#C8B8F0`, `#DDD2F7`, `#EFEAFB`, `#F8F5FE`
- Violet accent: `#6A4FC0`
- White: `#FFFFFF`
- Supporting text: `#4A5678`
- Error: `#9E1A2D` / `#FDF2F2`
- Success: `#12643E` / `#F0FDF4`
- Serif display type: Fraunces
- Sans-serif UI/body type: DM Sans

The intended visual balance is approximately 60% white/lilac-50 surfaces, 30% navy, and 10% pastel-purple/violet accents.

## Media assets

The following filenames are referenced by the project or reserved in the media plan:

- `media/campus-hero.jpg`
- `media/about-campus.jpg`
- `media/students-programmes.jpg`
- `media/student-services.jpg`
- `media/application-campus.jpg`
- `media/contact-campus.jpg`
- `media/crestwood-intro.mp4`

`about-campus.jpg` is currently listed as a planned media asset but is not currently referenced by the six HTML pages. Do not add it to a page unless the page layout is intentionally revised.

Generate the media separately and save each file using the exact filename above. Avoid embedded logos, watermarks, readable signage, fake university seals, invented UI text, or obviously staged stock-photo expressions.

## Detailed image-generation prompts

### 1. media/campus-hero.jpg

Create a photorealistic, premium editorial photograph of a contemporary South African university campus viewed from a slightly elevated perspective that still feels physically believable and connected to the ground. Show several modern but realistic academic buildings with restrained architectural design, natural concrete, glass and brick or stone materials, landscaped pedestrian paths, mature shade trees, lawns and subtle outdoor seating. Include a small number of diverse young adult university students naturally walking between buildings, carrying backpacks, books or laptops. Their clothing should be ordinary contemporary student clothing with realistic proportions and varied poses; avoid identical faces, uniforms or exaggerated smiles. The scene should communicate an established university environment rather than a futuristic technology campus. Use warm late-afternoon natural daylight with believable shadows, moderate contrast and realistic atmospheric depth. The composition must leave a clean area of visual space suitable for a dark text overlay on one side, while the architecture and students remain visually balanced. Camera language should resemble high-end architectural/editorial photography rather than a commercial stock image: realistic lens perspective, natural depth of field, accurate skin tones, physically plausible materials, subtle imperfections and no excessive HDR. Do not include any university logo, crest, watermark, brand name, readable sign, fabricated institution name, flags, banners or visible text. Do not create futuristic towers, impossible architecture, excessive glass, oversized crowds or cinematic fantasy lighting. Landscape orientation, 16:9, high resolution, suitable for a full-width website hero.

### 2. media/about-campus.jpg

Create a photorealistic editorial photograph of a believable contemporary South African university academic building and surrounding campus environment. The building should feel established, functional and premium without looking luxurious or futuristic: a combination of modern concrete, glass, brick or stone, covered walkways, landscaped gardens, mature trees and pedestrian paths. Include a few diverse young adult students naturally walking through the environment, talking quietly or carrying books and backpacks. Keep the people secondary to the architecture and avoid staged poses. The environment should suggest a real university campus in Johannesburg or a comparable South African urban setting without reproducing a recognizable real institution. Use soft natural daylight, realistic shadows, authentic materials and subtle weathering so the scene does not look computer-generated. Frame the image with enough surrounding context to work as a supporting About-page photograph, with balanced negative space and no distracting foreground objects. Do not include readable signage, university names, logos, crests, watermarks, political symbols, flags, invented text or fictional branding. Avoid futuristic architecture, excessive crowds, dramatic cinematic effects and generic American or European campus clichés. Landscape orientation, 4:3, high resolution, natural editorial photography.

### 3. media/students-programmes.jpg

Create a photorealistic documentary-style photograph inside a contemporary South African university learning environment. Show a small group of diverse young adult university students collaborating naturally around a table with laptops, notebooks, textbooks and a few ordinary academic materials. The students should be actively discussing or reviewing work rather than looking directly at the camera. Give each person distinct facial features, natural body proportions, varied clothing and believable expressions. The room should feel like a real modern lecture, seminar, study or collaborative learning space with practical furniture, soft neutral finishes, windows or natural light and subtle signs of everyday student use. The technology should be plausible and understated: ordinary laptops and stationery rather than futuristic holograms or excessive screens. Use soft daylight coming through windows, realistic exposure, natural skin tones and a restrained depth of field. Composition should place the students clearly in the middle or foreground while retaining enough environmental context to communicate learning and collaboration. Avoid stock-photo perfection, identical people, forced smiles, posed handshakes, visible brand logos, readable text on screens or books, university crests, watermarks and artificial bokeh. Landscape orientation, 4:3, high resolution, authentic editorial campus photography.

### 4. media/student-services.jpg

Create a photorealistic documentary photograph showing authentic student life at a contemporary South African university. Depict a small, natural group of diverse young adult students spending time together in a modern campus social or common area. They may be sitting on outdoor seating, talking casually, checking a phone, carrying a backpack or walking between buildings. The interaction should feel candid and unposed, with relaxed body language and realistic facial expressions. The setting should include believable campus architecture, landscaped paths, mature trees, modest outdoor furniture and a few other students in the background, but avoid making the space look crowded. Use soft daylight and natural color rendering, with realistic skin tones, fabric textures and architectural materials. The overall atmosphere should communicate student support, community and everyday campus life without becoming a promotional stock-photo scene. Avoid exaggerated laughter, everyone looking at the camera, matching outfits, unrealistic diversity, futuristic architecture, excessive lens flare, heavy color grading, visible logos, readable signage, watermarks, university crests or invented text. Landscape orientation, 4:3, high resolution, restrained editorial photography.

### 5. media/application-campus.jpg

Create a photorealistic architectural photograph of a welcoming contemporary university entrance in South Africa. Show a realistic main academic or admissions-facing entrance with clean modern architecture, a covered pedestrian approach, landscaped planting, mature trees and a small number of diverse young adult students naturally arriving or walking through the entrance. The building should look credible for a real university: practical circulation, realistic doors and windows, subtle security and accessibility features, believable materials and modest signage areas. Students should be naturally distributed through the scene rather than posed in a promotional line. Use clear morning daylight with soft realistic shadows and neutral color rendering. Leave some visual breathing room around the entrance so the image can sit comfortably beside website application copy. Any sign surfaces should be blank, abstract or too distant to read; do not generate a fake university name or logo. No watermarks, readable text, crests, flags, political symbols, futuristic architecture, luxury-resort styling or excessive crowds. Landscape orientation, 4:3, high resolution, professional architectural/editorial photography.

### 6. media/contact-campus.jpg

Create a photorealistic editorial photograph of a contemporary South African university administration or academic building. The building should appear professional, established and believable, using restrained modern architecture with concrete, glass, brick or stone, landscaped grounds, a clearly defined entrance and realistic pedestrian circulation. Include only a few diverse young adult students and staff naturally moving through the environment; they should not pose for the camera. The scene should communicate an approachable institutional environment suitable for a university Contact page. Use soft daylight, realistic shadows, natural skin tones and accurate material textures. Include subtle environmental details such as pathways, trees, accessible entrances and modest outdoor seating where appropriate, but keep the building as the visual focus. Do not create a recognizable real university, fake institution branding, readable signage, logos, crests, watermarks, political symbols or invented text. Avoid futuristic architecture, sterile CGI surfaces, exaggerated symmetry, dramatic advertising lighting and stock-photo poses. Landscape orientation, 4:3, high resolution, understated architectural/editorial photography.

## Detailed video-generation prompt

### 7. media/crestwood-intro.mp4

Create a short photorealistic university campus film with an authentic documentary and editorial visual language. The setting is a believable contemporary South African university campus, using realistic academic buildings, landscaped pedestrian areas, study spaces and student facilities. The film should feel observational and naturally captured rather than like a glossy corporate advertisement.

Open with a calm establishing shot of the campus exterior in natural daylight. Show realistic architecture, mature trees, pedestrian paths and a small number of diverse young adult students moving between buildings. Follow with several short scenes of ordinary student activity: students entering an academic building, studying independently, collaborating around laptops and notebooks, using a realistic laboratory or technology learning space, browsing or reading in a university library, and talking casually in a campus social area. Include a mixture of wide establishing shots, medium environmental shots and a few close observational details such as hands writing notes, opening a laptop or walking through a corridor. Camera movement should be restrained and physically plausible: gentle tracking, stable handheld movement and occasional slow establishing movement. Avoid constant drone footage, rapid cuts, artificial camera motion and excessive cinematic effects.

Students should behave naturally and should not repeatedly look into the camera. Use varied clothing, realistic facial features, natural body proportions and believable interactions. Avoid identical faces, synchronized movements, exaggerated smiles, staged group poses and generic stock-footage behavior. Architecture, furniture, technology and clothing should all look contemporary but ordinary and physically realistic.

Use natural daylight as the primary lighting source, with believable indoor lighting for library, laboratory and classroom scenes. Maintain consistent exposure and realistic color throughout the film. Use subtle ambient campus sound if supported by the generator, such as distant conversation, footsteps and environmental room tone, without adding artificial voice-over or invented dialogue.

Do not show readable university names, logos, crests, watermarks, fabricated signage, political symbols, flags, fake statistics or on-screen marketing copy. Do not make the campus futuristic, luxurious, dystopian or overly cinematic. Do not use artificial lens flares, extreme shallow depth of field, excessive slow motion or hyper-saturated grading.

End with a simple, clean dark-navy title card with no generated text if text rendering is unreliable. Leave the center of the title card visually clear so the words “Crestwood University” can be added separately in editing. Target approximately 30–45 seconds, 1920×1080, 16:9, photorealistic documentary cinematography, natural motion and consistent visual identity from beginning to end.

## Icons

Icons should be used sparingly as visual support, not as a replacement for important text. A simple consistent icon system would work well for:

- Contact details: envelope, phone, location pin and clock.
- Student services: heart/hand-heart, briefcase, house, wallet, trophy and graduation-cap style icons.
- Programmes/faculties: book-open, flask, laptop/code, calculator, building and palette icons where they genuinely clarify a category.
- Application page: user, calendar, phone, document, upload/checklist and send icons.
- Form feedback: check-circle for success and triangle/exclamation for errors.
- Navigation: menu icon only if a mobile navigation control needs one.
- Video/media: play icon for a video control if the control is icon-only.

Keep icons visually consistent: one icon family, one stroke/weight style, modest sizes and the existing navy/violet palette. Do not scatter decorative icons across every paragraph or heading.

For accessibility, decorative icons should be hidden from assistive technology with `aria-hidden="true"`. If an icon is the only content of an interactive control, give the control an accessible name such as `aria-label="Open navigation"`; the icon itself should remain hidden from the screen reader. Icons that communicate information should have an equivalent text label in the interface. This follows common accessible icon guidance. citeturn0search0turn0search11

A practical implementation for this small static site is to use one established icon library rather than drawing many unrelated SVGs by hand. Font Awesome supports straightforward HTML icon classes and custom styling, and its documentation recommends keeping icon usage consistent. citeturn0search1turn0search8

## Accessibility

The website should retain:

- Semantic HTML5 structure
- Descriptive image alt text
- Associated form labels and controls
- Logical heading hierarchy
- Descriptive navigation links
- Keyboard-accessible controls
- Visible validation messages
- ARIA live regions where dynamic feedback is announced
- Responsive layouts
- Sufficient color contrast
- Accessible icon labels or `aria-hidden` treatment as appropriate

## Forms and JavaScript

The application and contact forms are front-end demonstrations only.

The application form includes fields for identity/contact information, nationality, gender, study level, faculty, programme, intake year, financial aid, document checklist and motivation. Programme choices change according to the selected faculty.

Client-side JavaScript validates required fields and relevant formats. Successful application submission generates a temporary reference in the browser; no application data is stored or sent to a server.

The contact form validates the supplied information and displays a front-end success state. It does not send an actual email.

## Running the website

No build system is required.

1. Keep the current root-level file structure intact.
2. Place generated media files in `media/` using the exact filenames listed above.
3. Open `index.html` in a modern browser.
4. For the introduction video, make sure `media/crestwood-intro.mp4` exists and matches the filename referenced by the HTML.

## Content policy for future edits

Keep the existing six-page site scope unless a new page is explicitly approved.

Do not invent additional institutional statistics, departments, services, partnerships, rankings, awards, testimonials, staff profiles, addresses, contact details or other institutional claims. When copy needs improvement, refine the existing information rather than adding new claims.

Do not describe the institution as fictional in visible website copy. Keep descriptions grounded in the information already present in the project.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- No JavaScript framework
- Google Fonts for DM Sans and Fraunces
