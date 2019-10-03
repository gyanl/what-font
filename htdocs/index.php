<html>
<head>
<title>Font Stuff</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="assets/css/style.css">
<script type="text/javascript" src="/assets/js/script.js" ></script>
</head>

<body>

<div class="header">
  <div class="title">Font Search and Browse</div>
  <div class="subtitle">Get your fonts here</div>
  <input type="text" placeholder="Search for a font, style or adjective" contenteditable="true"></input>
</div>


<div class="fonts">


  <?php
      $path = 'ofl';

      $dir = new DirectoryIterator($path);
      foreach ($dir as $fileinfo) {
          if ($fileinfo->isDir() && !$fileinfo->isDot()) {
            $fileinfo->getFilename()
            $metadata = $fileinfo.'\METADATA.pb';

            $json = file_get_contents($metadata);

            //Decode JSON
            $json_data = json_decode($json,true);

            //Print data
            print_r($json_data);

              echo '  <div class="font-card">
                  <div class="card-header">
                    <p class="font-name"></p>
                    <p class="num-styles">12 styles</p>
                    <p>Download</p>
                  </div>
                  <p class="sample-text">The quick brown fox jumps over the lazy dog.</p>
                </div>
              </div>';
          }
      }
  ?>

  <div class="font-card">
    <div class="card-header">
      <p class="font-name">Roboto</p>
      <p class="num-styles">12 styles</p>
      <p>Download</p>
    </div>
    <p class="sample-text">The quick brown fox jumps over the lazy dog.</p>
  </div>

</div>

<div class="footer">
Made with love at IDC School of Design
</div>

</body>

</html>
