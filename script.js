//your JS code here. If required.
 function expandImage(thumbnailId) {
        // Get the source of the clicked thumbnail
        const thumbnailSrc = document.getElementById(thumbnailId).src;

        // Set the source of the expanded image
        document.getElementById('expandedImage').src = thumbnailSrc;

        // Display the full-size image and hide the other thumbnails
        document.getElementById('fullsize').style.display = 'flex';
        document.getElementById('thumbnailGrid').style.display = 'none';
    }

    function collapseImage() {
        // Hide the full-size image and display the thumbnail grid
        document.getElementById('fullsize').style.display = 'none';
        document.getElementById('thumbnailGrid').style.display = 'grid';
    }
