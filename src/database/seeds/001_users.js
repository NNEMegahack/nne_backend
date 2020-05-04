
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { "barcode_number": "6954176828330",
          "barcode_type": "EAN",
          "mpnm": "346364",
          "model": "346364",
          "asin": "B01MQSVBL4",
          "product_name": "Mi Box Android 6 TV, 4K, HDR, 2Gb RAM, 2.0GHz, remote, 60fps (International Version)",
          "category": "Electronics > Communications > Telephony > Mobile Phones",
          "manufacturer": "Mi",
          "brand": "Walio",
          "label": "Mi",
          "publisher": "Mi",
          "length": 8.27,
          "width": 0.62,
          "height": 0.41,
          "weight": 21,
          "description": "Xiaomi MI box Internacional con Google Play Store version Multi-idioma there. Se ejecuta en el último Android TV 6.0 que es fácil de usar, soporta controles de voz y Google CastTM.Un alto rendimiento of CPU Quad-core cortex-a53 puede jugar una amplia gama de juegos. VEA videos en detalle como nunca antes contenido hdr seleccionado. Las Escenas De Los Testigos y los personajes cobran vida en vivo contrast, color y claridad. Dolby DTS certificado, El mi Soporta DOLBY DIGITAL PLUS, DTS Surround HD codificación audio Especificaciones: Sistema operativo: Android TV Box CPU: Quad-Core cortex-a53 - 6.0 Marshmallow 2.0GHz GPU: Mali 450 750MHz - Ram: 2GB DDR3; ROM: 8GB eMMC WiFi: 802.11 a/b/g/n/ac, Banda Dual WiFi 2.4GHz/5GHz - Bluetooth: Bluetooth 4.0 - Perfil vp9-2 hasta 4 K x 2 K @ 60fps; H.265 HEVC MP-10 L5.1, hasta 4 K x 2 K - 60fps H.264 AVC HPAT L5.1, 4 K x 2 K has 30fps H.264 MVC, hasta 1080p 60fps - admite hasta el procesamiento hdr10/HDR HLG (requiere software actualización - Support audio DTS 2.0 + Digital Out, Dolby Digital Plus. Hasta 7.1 Paso a través - Imagen soportada: MP3, APE, FLAC, ACC, OGG, Resolución: Hasta 4 K 60fps; Idioma: Multilenguaje interfaces 1 x USB 2.0; 1x hdmi2.0, 1 x AV, 1 x DC IN - alimentación: 5.2 V, 2.1 A; Dimensiones: 101 x 101 x 19.5 mm - Peso: 176,5 g",
          "features": 
            "Internacional version: Google Play Store there multi-idioma fábrica. Solo Conecte disfrute. Android TV 6.0 Marshmallow: ejecuta en el último Android TV 6.0 que es fácil de usar, Soporta Controles de Voz y Google casttm. Capture SUS programas de TV favoritos, juegue Vea Las noticias O cambie a la radio. Mi Box también recomienda videos basados En tus personal preferencias de YouTube y from Google Play. \
            transmisión súper suave, descodificación 60fps 4 K: Un Potente decodificador de video ES Como tener un Procesador de alto rendimiento. Mi Box puede manejar hasta 60 fotogramas por Segundo, Lo que es el Doble de lo que pueden Hacer otros decodificadores\
            Sonido DTS Dolby: Dolby DTS surround certificado, El Mi Box Soporta Dolby Digital Plus, DTS HD codificación audio surround. El resultado ES UN Sonido envolvente estéreo más suave, dinámico, envolvente y más realista durante la reproducción de vídeo Ultra HD Blu-ray Disc. \
            Mucho más en una pequeña caja: CPU Quad-core cortex-a53, 2GB RAM, 8GB ROM, Bluetooth control remoto Voz, H.265 aplicaciones de gran pantalla etc."
          ,
          "images": "https://images.barcodelookup.com/4426/44262204-1.jpg",
          "stores": [
            {
              "store_name": "eTuyo ES",
              "store_price": "70.35",
              "product_url": "https://www.etuyo.com/product.php?productid=51991&amp;sl=es",
              "currency_code": "USD",
              "currency_symbol": "$"
            },
            {
              "store_name": "Rakuten Deutschland GmbH",
              "store_price": "73.85",
              "product_url": "https://www.rakuten.de/produkt/xiaomi-mi-box-streaming-client-schwarz-3-generation-2291504195",
              "currency_code": "EUR",
              "currency_symbol": "€"
            }
          ],
        },
        { "barcode_number": "9788577990481",
          "barcode_type": "ISBN",
          "product_name": "O Dia Da Tempestade (Em Portuguese Do Brasil)",
          "title": "O Dia Da Tempestade (Em Portuguese Do Brasil)",
          "category": "Media > Books",
          "author": "Rosamunde Pilcher",
          "publisher": "Bestbolso",
          "description": "Uma história sobre morte e intriga na alta costura.Tudo começa quando Neeve Kearny, filha do ex-comissário de polícia Myles e dona de uma butique chique na Madison Avenue, tenta descobrir quem é o assassino da famosa escritora Ethel Lambston, uma das melhores clientes de Neeve. Ethel aparece com a garganta cortada pouco tempo antes de lançar um livro de fofocas sobre o mundo da moda. Na lista dos suspeitos estão o sobrinho de Ethel, o ex-marido e um conhecido estilista. A vida de Neeve vira então um tormento - o assassino passa a querer eliminá-la também.",
          "images": "https://images.barcodelookup.com/2550/25503000-1.jpg",
          "stores": [
            {
              "store_name": "ThriftBooks.com",
              "store_price": "77.39",
              "product_url": "https://www.thriftbooks.com/w/bridget-joness-diary_helen-fielding/281400/#isbn=8577990486",
              "currency_code": "USD",
              "currency_symbol": "$"
            }
          ],
      }
      ]);
    });
};
