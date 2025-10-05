// Asset preloader utility
class AssetPreloader {
  constructor() {
    this.loadedAssets = 0;
    this.totalAssets = 0;
    this.assets = [];
    this.fonts = [];
    this.images = [];
    this.videos = [];
    this.audio = [];
    this.onProgress = null;
    this.onComplete = null;
  }

  // Add font to preload list
  addFont(fontFamily, fontUrl) {
    this.fonts.push({ family: fontFamily, url: fontUrl });
    this.totalAssets++;
    return this;
  }

  // Add image to preload list
  addImage(imageUrl) {
    this.images.push(imageUrl);
    this.totalAssets++;
    return this;
  }

  // Add video to preload list
  addVideo(videoUrl) {
    this.videos.push(videoUrl);
    this.totalAssets++;
    return this;
  }

  // Add audio to preload list
  addAudio(audioUrl) {
    this.audio.push(audioUrl);
    this.totalAssets++;
    return this;
  }

  // Set progress callback
  onProgressCallback(callback) {
    this.onProgress = callback;
    return this;
  }

  // Set completion callback
  onCompleteCallback(callback) {
    this.onComplete = callback;
    return this;
  }

  // Load a single font
  loadFont(font) {
    return new Promise((resolve, reject) => {
      // Check if font is already loaded
      if (document.fonts.check(`16px "${font.family}"`)) {
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
        return;
      }

      const fontFace = new FontFace(font.family, `url(${font.url})`);
      
      fontFace.load().then(() => {
        document.fonts.add(fontFace);
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      }).catch((error) => {
        console.warn(`Failed to load font ${font.family}:`, error);
        // Still count as loaded to not block the app
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      });
    });
  }

  // Load a single image
  loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      img.onerror = (error) => {
        console.warn(`Failed to load image ${imageUrl}:`, error);
        // Still count as loaded to not block the app
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      img.src = imageUrl;
    });
  }

  // Load a single video
  loadVideo(videoUrl) {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.oncanplaythrough = () => {
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      video.onerror = (error) => {
        console.warn(`Failed to load video ${videoUrl}:`, error);
        // Still count as loaded to not block the app
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      video.src = videoUrl;
      video.load();
    });
  }

  // Load a single audio file
  loadAudio(audioUrl) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.oncanplaythrough = () => {
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      audio.onerror = (error) => {
        console.warn(`Failed to load audio ${audioUrl}:`, error);
        // Still count as loaded to not block the app
        this.loadedAssets++;
        this.onProgress && this.onProgress(this.loadedAssets, this.totalAssets);
        resolve();
      };
      audio.src = audioUrl;
      audio.load();
    });
  }

  // Start loading all assets
  async loadAll() {
    try {
      // Load fonts
      const fontPromises = this.fonts.map(font => this.loadFont(font));
      
      // Load images
      const imagePromises = this.images.map(imageUrl => this.loadImage(imageUrl));
      
      // Load videos
      const videoPromises = this.videos.map(videoUrl => this.loadVideo(videoUrl));
      
      // Load audio
      const audioPromises = this.audio.map(audioUrl => this.loadAudio(audioUrl));

      // Wait for all assets to load
      await Promise.all([
        ...fontPromises,
        ...imagePromises,
        ...videoPromises,
        ...audioPromises
      ]);

      this.onComplete && this.onComplete();
    } catch (error) {
      console.error('Error loading assets:', error);
      // Still call complete to not block the app
      this.onComplete && this.onComplete();
    }
  }
}

// Create a preloader instance with all assets
export const createAssetPreloader = () => {
  const preloader = new AssetPreloader();

  // Add all fonts
  preloader
    .addFont('DelaGothicOne', './src/assets/font/DelaGothicOne-Regular.woff2')
    .addFont('AeonikRegular', './src/assets/font/Aeonik-Regular.133c8d5a0dd65f35129e.woff2')
    .addFont('ArchitectsDaughter', './src/assets/font/ArchitectsDaughter.woff2');

  // Add all images using dynamic imports
  const imageAssets = [
    () => import('../assets/background.png'),
    () => import('../assets/papertTexturebg.png'),
    () => import('../assets/aboutAssets/poster.png'),
    () => import('../assets/aboutAssets/poster.svg'),
    () => import('../assets/aboutAssets/stamp.svg'),
    () => import('../assets/aboutAssets/vintagepaper.png'),
    () => import('../assets/cursorAssets/popcorn 2.svg'),
    () => import('../assets/cursorAssets/popcorn1.svg'),
    () => import('../assets/footerAssets/logo 1.svg'),
    () => import('../assets/footerAssets/logo2.svg'),
    () => import('../assets/footerAssets/yellowLightBig.svg'),
    () => import('../assets/homeAssets/Caset.avif'),
    () => import('../assets/homeAssets/cassete.avif'),
    () => import('../assets/homeAssets/Cd.svg'),
    () => import('../assets/homeAssets/CdM.svg'),
    () => import('../assets/homeAssets/close.svg'),
    () => import('../assets/homeAssets/roll.svg'),
    () => import('../assets/homeAssets/TicketMenuimg.png'),
    () => import('../assets/homeAssets/yellowLight.svg'),
    () => import('../assets/loaderAssets/logo 1.svg'),
    () => import('../assets/loaderAssets/logo2.svg'),
    () => import('../assets/workAssets/filmstrip.png'),
    () => import('../assets/interactiveAssets/airplane-ground_1092560-19380.png'),
    () => import('../assets/interactiveAssets/calendar.png'),
    () => import('../assets/interactiveAssets/car.png'),
    () => import('../assets/interactiveAssets/ChatGPT Image Apr 27, 2025, 11_39_13 AM.png'),
    () => import('../assets/interactiveAssets/cinematicket.png'),
    () => import('../assets/interactiveAssets/csspin.png'),
    () => import('../assets/interactiveAssets/figmapin.png'),
    () => import('../assets/interactiveAssets/filmroll1.png'),
    () => import('../assets/interactiveAssets/filmroll2.png'),
    () => import('../assets/interactiveAssets/flag.png'),
    () => import('../assets/interactiveAssets/gsappin.png'),
    () => import('../assets/interactiveAssets/htmlpin.png'),
    () => import('../assets/interactiveAssets/note.png'),
    () => import('../assets/interactiveAssets/noticeboard.png'),
    () => import('../assets/interactiveAssets/paper.png'),
    () => import('../assets/interactiveAssets/plane.png'),
    () => import('../assets/interactiveAssets/postStamp.png'),
    () => import('../assets/interactiveAssets/reactpin.png'),
    () => import('../assets/interactiveAssets/ukelele.png'),
    () => import('../assets/interactiveAssets/wanted.png')
  ];

  // Add all videos using dynamic imports
  const videoAssets = [
    () => import('../assets/loaderAssets/glitch.mp4'),
    () => import('../assets/workAssets/Jelly Fish.mp4'),
    () => import('../assets/workAssets/max milkin.mp4'),
    () => import('../assets/workAssets/Nike Reimagine.mp4'),
    () => import('../assets/workAssets/planets.mp4'),
    () => import('../assets/workAssets/Rain Delay Media.mp4'),
    () => import('../assets/workAssets/Sundown Studio.mp4')
  ];

  // Add all audio using dynamic imports
  const audioAssets = [
    () => import('../assets/homeAssets/spinaudio.mp3')
  ];

  // Load all assets using dynamic imports
  const loadAllAssets = async () => {
    try {
      // Load fonts
      const fontPromises = preloader.fonts.map(font => preloader.loadFont(font));
      
      // Load images
      const imagePromises = imageAssets.map(importFn => 
        importFn().then(() => {
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        }).catch(error => {
          console.warn('Failed to load image:', error);
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        })
      );
      
      // Load videos
      const videoPromises = videoAssets.map(importFn => 
        importFn().then(() => {
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        }).catch(error => {
          console.warn('Failed to load video:', error);
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        })
      );
      
      // Load audio
      const audioPromises = audioAssets.map(importFn => 
        importFn().then(() => {
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        }).catch(error => {
          console.warn('Failed to load audio:', error);
          preloader.loadedAssets++;
          preloader.onProgress && preloader.onProgress(preloader.loadedAssets, preloader.totalAssets);
        })
      );

      // Update total assets count
      preloader.totalAssets = preloader.fonts.length + imageAssets.length + videoAssets.length + audioAssets.length;

      // Wait for all assets to load
      await Promise.all([
        ...fontPromises,
        ...imagePromises,
        ...videoPromises,
        ...audioPromises
      ]);

      preloader.onComplete && preloader.onComplete();
    } catch (error) {
      console.error('Error loading assets:', error);
      preloader.onComplete && preloader.onComplete();
    }
  };

  // Override the loadAll method
  preloader.loadAll = loadAllAssets;

  return preloader;
};

export default AssetPreloader;