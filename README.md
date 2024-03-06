# atlaspad/landing

## Getting started

### Local builds

To list all tasks and issues, go to [https://github.com/orgs/atlaspad/projects/3/views/1](https://github.com/orgs/atlaspad/projects/3/views/1).

Start by running npm to install the required packages. Then, run the gulp command to start the development server.

```
npm i
npm run gulp
```

We will slowly migrate to scaffolding-build and sunset gulp.

### Development server

The project is automatically built by GitHub Actions, then published to Firebase.

| Branch | Endpoint                          |
| ------ | --------------------------------- |
| `main` | https://atlaspad-landing.web.app/ |

## Folder structure

- public/
  - index.html
  - img/
  - video/
  - fonts/

- src/
  - sass/
  - js/

> [!WARNING]
> Source files reside in `src` directory, where they'll be compiled to `public` directory. Make sure that your changes are made in the `src` directory.

## Legacy

<details>
  <summary>Click here for details.</summary>
  ▸Componentleri buradan çekeceksiniz repo alt satırda: https://nextui.org/

▸https://github.com/nextui-org/next-app-template

Author:Baturalp -> Thanks for usedapp and nextjs opensource files

## [Genel] Proje Görevleri
- Herkese yaklaşık 10 görev düşecek.
- Kişi seçtiği görevi yapana kadar başka görev seçemeyecek ve görevde başkasının adı varsa o görevi seçemeyecek
- "Burada": readme.md dosyasını ifade etmektedir.

1. Proje figmaya geçirilecek. **[herkes]**
2. ~~Footer'daki linkler güncellenecek. **[mehmet]**~~
3. En alttaki copyright metni güncellenecek.
4. Google Analytics tracking code buraya eklenecek.
5. Sayfa yüklendikten sonra çalışacak fonksiyonlar herhangi bir read.me dosyasında tanımlanacak.
6. Pop-up tasarımları genel temaya uygun yapılacak.
7. Sayfa içi smooth scroll için ekstra JS kodları yer alacak.
8.  Özel animasyonlar ve etkileşimler için ek JS kodları eklenecek.
9.  SVG sprite'lar için kullanılacak, sayfanın altında (footer)'da yer alacak.
10. Dışarıdan yüklenen JS kütüphaneleri eklenecek.
11. Sayfanın SEO performansını artıracak eklemeler yapılacak.
12. Performans iyileştirmeleri için lazy loading gibi tekniklerin uygulanması not edilecek.
13. Tarayıcı uyumluluğu testleri ve düzeltmeleri için notlar yer alacak.
14. Site genelinde tutarlı bir stil rehberinin uygulanması için notlar figma'da olacak.
15. Responsive tasarım testleri ve iyileştirmeler için notlar css yorum satırlarında bulunacak.
16. Cross-browser test sonuçları ve ilgili düzeltmeler burada dokumente edilecek.
17. Sayfa yükleme sürelerini iyileştirmek için yapılan çalışmalar burada listelenecek. **[yunus emre]**
18. Kullanıcı deneyimini iyileştirmek için alınan geri bildirimler ve yapılan değişiklikler olacak.
19. Güvenlikle ilgili düzenlemeler ve güncellemeler için yapılacaklar listesi yer alacak.
20. Kullanıcı geri bildirimleri ve anketler için eklenmesi planlanan özellikler ve düzenlemeler read.me'de listelenecek.
21. Web sitesinin farklı dillerde sunulması için yapılacak çeviri çalışmaları ve düzenlemeler burada not edilecek.
22. Yedekleme ve veri kurtarma planları için yapılan düzenlemeler ve testler burada anlatılacak.
23. Web sitesi ile ilgili sıkça sorulan sorular ve cevapları için bir bölüm eklenecek. **[berk]**
24. Kullanıcı yorumları ve testimony bölümü için planlanan düzenlemeler ve eklentiler burada olacak.
25. Blog bölümü oluşturulacak ve onun için içerik planlaması ve yayın takvimi burada ya da figma'da oluşturulacak. **[yiğid ve yunus emre]**
26. Ürün güncellemeleri ve yeni özellikler hakkında bilgilendirme için planlanan bölümler burada listelenecek.
27. İletişim formu ve müşteri hizmetleri ile ilgili iyileştirmeler ve eklemeler burada olacak.
28. Kariyer sayfası ve iş ilanları için düzenlemeler ve güncellemeler burada yapılmış olacak.
29. Partnerlik ve işbirlikleri için ayrı bir bölüm planlanıyor ve burada detaylar yer alacak.
30. Sürdürülebilirlik ve çevre dostu uygulamalar hakkında bilgi verilecek bir bölüm eklenecek.
31. Web sitesinin gelecekteki genişlemeleri feedback alındıkça ve gelişim yönleri için yapılan planlamalar burada olacak. **[berk]**
32. Proje yönetimi ve iş akışı düzenlemeleri için kullanılan araçlar ve metodlar burada ve figma'da listelenecek.
33. Kullanıcı deneyimi (UX) araştırmaları ve testleri için yapılan çalışmalar burada anlatılacak. **[berk ve mehmet]**
34. Marka kimliği ve kurumsal kimlik çalışmaları için yapılan düzenlemeler burada yer alacak.
35. Web sitesi için yapılan kullanılabilirlik testleri ve sonuçları burada anlatılacak.
36. Hukuki uyumluluk ve düzenlemelerle ilgili yapılan çalışmalar ve güncellemeler burada yer alacak. **[berk]**
37. Teknolojik altyapı ve sunucu kapasitesi ile ilgili yapılan iyileştirmeler burada listelenecek.
38. Web sitesinin farklı platformlarda nasıl göründüğüne dair testler ve düzenlemeler burada yer alacak.
39. Kullanıcı tarafından bildirilen hatalar ve bunların çözümü için yapılan düzenlemeler burada anlatılacak.
40. Güvenlik sertifikaları ve SSL konfigürasyonları için yapılan güncellemeler burada belirtilecek.
41. Erişilebilirlik standartlarına (WCAG) uyum için yapılan düzenlemeler burada listelenecek.
42. İçerik yönetim sistemi (CMS) seçimi ve yapılandırması için yapılan çalışmalar burada anlatılacak.
43. Dijital varlık yönetimi (DAM) sistemleri için yapılan araştırmalar ve planlamalar burada yer almayacak.
44. Çoklu dil desteği ve lokalizasyon çalışmaları için yapılan düzenlemeler burada belirtilecek.
45. Kullanıcı geribildirim mekanizmaları ve toplanan verilerin analizi için yapılan çalışmalar burada olacak.
46. Web sitesi güncellemeleri ve versiyon yönetimi için yapılan planlamalar burada listelenecek.
47. Ürün ve hizmetlerin çevrimiçi vitrinde nasıl sunulacağına dair stratejiler burada yer alacak.
48. Web sitesi üzerinde gerçekleştirilecek etkinlikler ve kampanyalar için yapılan ön hazırlıklar burada olacak.
49. Web sitesinin kullanıcı dostu olup olmadığını değerlendirmek için yapılan kullanıcı testleri burada listelenecek.(yapılırsa eğer)
50. Mobil uyumluluk ve uygulama entegrasyonları için yapılan çalışmalar ve testler burada anlatılacak.
51. Veri merkezi ve hosting hizmetleri ile ilgili yapılan değerlendirmeler ve seçimler burada belirtilecek.(hostinger go brrrr)
52. Web sitesi tasarımı ve kullanıcı arayüzü (UI) için yapılan yenilikler ve güncellemeler burada yer alacak.
53. Video içerikleri ve multimedya entegrasyonları için planlanan çalışmalar burada listelenecek. **[herkes]**
54. Web sitesinin farklı cihaz ve ekran boyutlarına uygun olması için yapılan düzenlemeleri yapılırsa figma'da anlatılacak.
55. Web sitesi ziyaretçilerine özel teklifler ve promosyonlar için yapılan planlamalar burada belirtilecek.
</details>
