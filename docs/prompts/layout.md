# 🗺️ PRODUCT ROADMAP

**Gym + Kalori + Gamification App**

Bu roadmap’in temel amacı:

> **En erken noktada anlamlı bir ürün ortaya çıkarmak
> ve yanlış sırayla ilerleyip sistemi çürütmemek.**

---

## 🔹 FAZ 0 — ÜRÜN İSKELETİNİ KİLİTLE (YAZMADAN ÖNCE)

**Kod yok. UI yok. Firebase yok.**

### Yapılacaklar

* Ürün felsefesini yazılı hale getir:

  * Ceza yok
  * Level düşmez
  * Frozen = ara
  * Rekabet adil
* Temel kavramları kesinleştir:

  * Level
  * Puan
  * Competition
  * LevelState
* “Asla yapmayacağız” listesini oluştur

### Çıktı

* Net kurallar
* Kararları geri alma ihtiyacı kalmaz

📌 **Bu faz atlanırsa**, ileride sürekli refactor olur.

---

## 🔹 FAZ 1 — ÇEKİRDEK KULLANICI & VERİ MODELİ

Bu fazda amaç:

> **Uygulama çökmeden veri tutabiliyor mu?**

### Öncelik Sırası

#### 1️⃣ Firebase Auth

* Email / anon login yeterli
* UID üzerinden ilerle

#### 2️⃣ Firestore veri modeli

* users
* dailyLogs
* targets

Henüz:

* PvP yok
* Puan yok
* Level yok

📌 Sadece:

> “Bir kullanıcı veri giriyor mu, okuyabiliyor muyuz?”

### Çıktı

* Sağlam NoSQL yapı
* Geriye dönük veri kaybı riski yok

---

## 🔹 FAZ 2 — GÜNLÜK TAKİP MOTORU (ÜRÜNÜ YAŞATAN KISIM)

Bu fazda ürün **ilk kez anlam kazanır**.

### Öncelik Sırası

#### 1️⃣ Günlük kalori girişi

* Tarih bazlı unique
* Günlük özet hesaplama

#### 2️⃣ Gym log

* Basit: yaptım / yapmadım
* Haftalık sayım

#### 3️⃣ Kilo log

* Değiştirilebilir
* Tarihsel grafik altyapısı

📌 Hedefler **henüz pasif**
📌 Gamification **yok**

### Çıktı

* Kullanıcı “takip ediyorum” der
* App artık bir tracker’dır

---

## 🔹 FAZ 3 — HEDEF SİSTEMİ (MOTİVASYONUN TEMELİ)

Bu noktada kullanıcı şunu sorar:

> “Peki iyi mi gidiyorum?”

### Öncelik Sırası

#### 1️⃣ Günlük kalori hedefi

* Aşıldı / kaldı
* Basit hesap

#### 2️⃣ Haftalık gym hedefi

* Progress bar
* Reset mekanizması

#### 3️⃣ Uzun vadeli kilo hedefi

* Yavaş değişen
* Baskı yaratmayan

📌 Hâlâ:

* Puan yok
* Level yok
* Rekabet yok

### Çıktı

* Kişisel hedef bilinci
* “Devam etmeliyim” hissi

---

## 🔹 FAZ 4 — PUAN MOTORU (AMA LEVEL YOK!)

⚠️ **Kritik faz**
Çoğu proje burada hata yapar.

### Neden?

Level = kimliktir
Kimlik, sistem oturmadan verilmez.

### Öncelik Sırası

#### 1️⃣ Puan kazanma

* Hedef tutarlılığına göre
* Günlük / haftalık

#### 2️⃣ Puan kaybı

* Sadece competition context’inde
* Günlük hayatta ceza yok

📌 Puan:

* görünür
* ama “ne işe yarıyor?” henüz belirsiz olabilir

### Çıktı

* Skor sistemi çalışıyor
* Abuse test edilebilir

---

## 🔹 FAZ 5 — LEVEL & LEVEL STATE (KİMLİK DOĞAR)

Bu fazdan sonra ürün **sıradan olmaktan çıkar**.

### Öncelik Sırası

#### 1️⃣ Level hesaplama

* Puan eşikleri
* 4–5 seviye

#### 2️⃣ Level State

* Active / Frozen
* Donma koşulları
* Çözülme koşulları

⚠️ Burada:

* Level düşmez
* Puan silinmez

### UI

* Sadece mikro değişiklikler
* Profilde detay yok (henüz)

### Çıktı

* Kullanıcı “ben buyum” demeye başlar

---

## 🔹 FAZ 6 — PROFİL & STATÜ GÖRSELİ

Şimdi kimlik **gösterilebilir**.

### Öncelik Sırası

#### 1️⃣ Profil sayfası

* Level
* Puan
* Rozet placeholder

#### 2️⃣ Level’e göre makro UI

* Arka plan
* Badge
* Başlık fontu

📌 Genel UI hâlâ sade

### Çıktı

* Gurur
* Paylaşılabilirlik

---

## 🔹 FAZ 7 — COMPETITION (PvP)

⚠️ En sona bırakılmasının sebebi:

* En kırılgan sistem
* En çok abuse edilen alan

### Öncelik Sırası

#### 1️⃣ Davet + kabul

* 1v1
* Basit lifecycle

#### 2️⃣ Mode sistemi

* Standard
* Custom
* Ranked

#### 3️⃣ PvP sonrası anlatı

* Neden kazandın?
* Denge değerlendirmesi

📌 Leaderboard minimal
📌 Toksik dil yok

### Çıktı

* Sosyal motivasyon
* Ama core bozulmaz

---

## 🔹 FAZ 8 — MOTİVASYON & GERİ DÖNÜŞ KATMANI

Bu faz **retention fazıdır**.

### Öncelik Sırası

#### 1️⃣ Mikro motivasyon mesajları

* Günlük yorumlar
* Sessiz hatırlatmalar

#### 2️⃣ Skip day

* Bilinçli boşluk
* Abuse kontrollü

#### 3️⃣ Comeback reward

* Statüsel
* Geçici

### Çıktı

* Uzun vadeli kullanım
* “Bıraktım” yerine “ara verdim”

---

## 🔹 FAZ 9 — ŞEFFAFLIK & GÜVEN

Son ama çok önemli.

### Yapılacaklar

* “Kurallar nasıl çalışıyor?” ekranı
* Puan / level / competition açıklamaları
* Kullanıcıya hesap verebilirlik

### Çıktı

* Güven
* Destek ihtiyacı azalır

---

# 🧠 ROADMAP FELSEFESİ (UNUTMA)

* Kimlik → en sona
* Rekabet → en sona
* Ceza → hiç yok
* Geri dönüş → her zaman kolay

---

## 🎯 TEK CÜMLELİK ROADMAP ÖZETİ

> **Önce veri,
> sonra hedef,
> sonra puan,
> en son kimlik ve rekabet.**
